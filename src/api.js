import axios from "axios";

// Development
// const domain = 'http://127.0.0.1:8000'

// Profile
// For production test environment
const domain = 'https://test.sportswatchapp.dk'

// Production
// const domain = ...

const instance = axios.create({
    baseURL: domain + '/api/v1/',
});
instance.defaults.headers.common['Content-Language'] = 'da'

export default {
    user: {
        create: credentials =>
            instance.post("users/", JSON.parse(credentials)).then(res => res.data)
    }
}
