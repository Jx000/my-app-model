import axios from 'axios'

// import { message } from 'antd'


axios.defaults.headers.post['Content-Type'] = 'application/json'
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const identityType = localStorage.getItem('identityType')

const seller = localStorage.getItem('sellerId') ? localStorage.getItem('sellerId') : null

const supplier = localStorage.getItem('supplierId') ? localStorage.getItem('supplierId') : null

if(identityType * 1 === 1) {
    axios.defaults.headers.common['X-Requested-Supplier'] = supplier    
} else if (identityType * 1 === 2) {
    axios.defaults.headers.common['X-Requested-Seller'] = seller
}

if( token ) {
    axios.defaults.headers.common['X-Requested-Token'] = token
}


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
        axios.post(url + `${id ? '/' + id : ''}`, param).then(res => {
            if(res.data && res.data.token){
                const {token} = res.data
                localStorage.setItem('token', token)
                axios.defaults.headers.common['X-Requested-Token'] = token

                let sellerId = null
                let supplierId = null
                if(res.data.sellerList){
                    sellerId = res.data.sellerList[0].id
                    localStorage.setItem('sellerId', sellerId)
                }
                if(res.data.supplierList){
                    supplierId = res.data.supplierList[0].id
                    localStorage.setItem('supplierId', supplierId)
                }
            }
            return resolve(res)
        }).catch(error => reject(error))
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