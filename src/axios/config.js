import axios from 'axios'

import { message } from 'antd'


axios.defaults.headers.post['Content-Type'] = 'application/json'


axios.interceptors.request.use(config => {

    return config
}, error => Promise.reject(error))


axios.interceptors.response.use(response => {
    
    return Promise.resolve(response.data ? response.data : response)
}, error => {

    return Promise.reject(error)
})


// get请求
export function get(url, param, id){
    return new Promise((resolve, reject) => {
        axios.get(url + `${id ? '/' + id : ''}`, {params: param}).then(response => resolve(response)).catch(error => reject(error))
    })

}

//post请求
export function post(url, param, id){
    return new Promise((resolve, reject) => {
        axios.post(url + `${id ? '/' + id : ''}`, param).then(response => resolve(response)).catch(error => reject(error))
    })
}

//put请求
export function put(url, param, id){
    return new Promise((resolve, reject) => {
        axios.put(url + `${id ? '/' + id : ''}`, param).then(response => resolve(response)).catch(error => reject(error))
    })
}

//delete请求
export function deleted(url, param, id){
    return new Promise((resolve, reject) => {
        axios.delete(url + `${id ? '/' + id : ''}`, {data: param}).then(response => resolve(response)).catch(error => reject(error))
    })
}