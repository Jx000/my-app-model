
import { login, supplierCommodityList } from '../axios/api'

import { LOGIN_SUCCESS, COMMODITY_LIST } from './action-type'

import { message } from 'antd'
import md5 from 'md5'


const userData = (userParam) => ({type: LOGIN_SUCCESS, data: userParam})

const commodityListData = (commodityListParam) => ({type: COMMODITY_LIST, data: commodityListParam})

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

//获取商品列表
export const reqCommodityList = (commodityListParam) => {
    const param = commodityListParam
    return async dispatch => {
        const {data} = await supplierCommodityList(param)
        dispatch(commodityListData(data))
    }
}