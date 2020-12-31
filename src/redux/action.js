
import { login } from '../axios/api'

import { LOGIN_SUCCESS } from './action-type'

import { message } from 'antd'
import md5 from 'md5'


const userData = (userParam) => ({type: LOGIN_SUCCESS, data: userParam})

// 登录
export const reqLogin = (userParam) => {
    const {phone, password, identityType} = userParam
    if(!phone){
        message.error('请输入手机号码');
    }
    const param = {
        phone: phone,
        password: md5(password)
    }
    return async dispatch => {
        const {data} = await login(param)
        dispatch(userData({
            phone: data.phone,
            identityType,
            sellerId: data.sellerList ? data.sellerList[0].id : '',
            supplierId: data.supplierList ? data.supplierList[0].id : '',
            token: data.token,
            id: data.id
        }))
    }
} 