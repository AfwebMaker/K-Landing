import axios from 'axios';

const instance1 = axios.create({
    baseURL: "https://domain.com/api/v1",
    timeout: 20000
});

const instance2 = axios.create({
    baseURL: "https://localhost:5000",
    timeout: 20000
});

export { instance1, instance2 };