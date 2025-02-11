import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://api.example.com' // replace with your actual API endpoint

})
export {axiosInstance}