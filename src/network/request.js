import axios from 'axios'

export function request(config){
    const instance = new axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 10000
    })
    instance.interceptors.request.use(data => {
        return data
    },err => {
        return err
    })
    instance.interceptors.response.use(configs => {
        return configs
    },err => {
        return err
    })
    return instance(config)
}