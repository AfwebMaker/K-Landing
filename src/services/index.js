import axios from 'axios';

const instance1 = axios.create({
    baseURL: "https://domain.com/api/v1",
    timeout: 20000
});

const instance2 = axios.create({
    baseURL: "https://localhost:5000",
    timeout: 20000
});

const submitRequestAPI = axios.create({
    baseURL: process.env.REACT_APP_SUBMIT_REQUEST_URL,
    timeout: 20000,
    headers: {
        "Accept": "application/json"
    }
})

export {instance1, instance2, submitRequestAPI};