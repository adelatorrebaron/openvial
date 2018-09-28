/* global localStorage */

import axios from 'axios'

let API_URL = 'http://localhost:3001/api/v1';
//let API_URL = 'http://localhost:8080/api/v1'; // URL con NGINX
//let API_URL = 'http://localhost:8090/api/v1'; // URL con NGINX y web en modo dev

if (process.env.URL_API_USUARIOS) {
  API_URL = process.env.URL_API_USUARIOS;
}

//const API_URL = process.env.API_URL || 'http://localhost:3000/api/v1'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})