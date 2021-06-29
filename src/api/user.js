import axios from 'axios'

 export function login(params) {
    return axios({
        method: "post",
        url: `https://mwcfinal.herokuapp.com/login`,
        data: {
            email: params.email,
           password: params.password
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err
    })
    return params
}

export function register(params) {
    return axios({
        method: "post",
        url: `https://mwcfinal.herokuapp.com/register`,
        data: {
            username: params.username,
            first_name: params.firstName,
            last_name: params.lastName,
            email: params.email,
            password: params.password,
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err
    })
    return params
}

export function dataResults(params) {
    console.log(params)
    return axios({
        method: "post",
        url: `https://mwcfinal.herokuapp.com/computeECM`,
        headers: {
            authorization: params.token
        },
        data: {
            predictions: params.array
        }
    })
    .then(res => {
        return res.data
    })
    .catch(err => {
        throw err
    })

}