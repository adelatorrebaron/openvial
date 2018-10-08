import axios from 'axios'

let URL_API_INFORMES    = 'http://localhost:3020/api/v1';

if (process.env.URL_API_INFORMES) {
    API_URL = process.env.URL_API_INFORMES;
}

let config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded',
       'content-type': 'application/json',
       'Authorization': 'Bearer ' + localStorage.token
    }
};


export default {

    report(nameReport, data) {

        const payload = {
            template_name: nameReport,
            data: data
        }

        return axios.post(
            URL_API_INFORMES + '/informes/',
            payload,
            {
                method: 'GET',
                responseType: 'blob' // Force to receive data in a Blob Format
            })
            .then(response => {

                // Create a Blob from the PDF Stream
                const file = new Blob(
                    [response.data], 
                    {type: 'application/pdf'}
                );

                // Build a URL from the file
                const fileURL = URL.createObjectURL(file);

                // Open the URL on new Window
                window.open(fileURL);
        })
        .catch(error => {
            console.log(error);
        });

    }

}