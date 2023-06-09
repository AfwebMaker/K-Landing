import axios from 'axios';

const instance = axios.create({
    baseURL: "",
    timeout: 20000
});

export default instance; 