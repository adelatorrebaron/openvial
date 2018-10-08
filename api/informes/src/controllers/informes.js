'use strict'

const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const handlebars = require('handlebars');


const compile = async function(templateName, data){
    // Genero el path donde está la plantilla en formato Handlebars (html y css)
    const filePath = path.join(process.cwd(), 'templates', `${templateName}.hbs`)
    
    // Leo el archivo
    const html = await fs.readFile(filePath, 'utf-8')
    
    // Lo devuelvo compilado y rellenado con los datos
    return handlebars.compile(html)(data)
}


const generatePdf = async function(templateName, data) {
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        const content = await compile(templateName, data)

        await page.setContent(content)
        await page.emulateMedia('screen')

        await page.pdf({
            path: `${templateName}.pdf`,
            format: 'A4',
            printBackground: true
        })

        await browser.close()

    } catch (err){
        console.log(err)
    }
}


//
// Genera un informe en pdf con los datos pasados
//
exports.getInforme = async (req, res, next) => {

    const templateName  = req.body.template_name
    const data          = req.body.data
    
    const result = await generatePdf(templateName, data)

    const pdf = path.join(process.cwd(), `${templateName}.pdf`)

    fs.readFile(pdf , function (err,data){
        res.contentType("application/pdf");
        res.send(data);
    });

}

