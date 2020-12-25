import axios from 'axios'


axios.defaults.headers.post['Content-Type'] = 'application/json'


axios.interceptors.request.use(config => {

    return config
}, error => Promise.reject(error))


axios.interceptors.response.use(response => {

    return Promise.resolve(response)
}, error => {

    return Promise.reject(error)
})


// get请求
export function get(url, param, id){
    return new Promise((resolve, reject) => {
        axios.get(url + `${id ? '/' + id : null}`, {params: param}).then(response => resolve(response)).catch(error => reject(error))
    })

}

//post请求
export function post(url, param, id){
    return new Promise((resolve, reject) => {
        axios.post(url + `${id ? '/' + id : null}`, param).then(response => resolve(response)).catch(error => reject(error))
    })
}

//put请求
export function put(url, param, id){
    return new Promise((resolve, reject) => {
        axios.put(url + `${id ? '/' + id : null}`, param).then(response => resolve(response)).catch(error => reject(error))
    })
}

//delete请求
export function deletereq(url, param, id){
    return new Promise((resolve, reject) => {
        axios.delete(url + `${id ? '/' + id : null}`, {data: param}).then(response => resolve(response)).catch(error => reject(error))
    })
}