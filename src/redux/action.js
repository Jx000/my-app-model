
import { login, supplierCommodityList, commoditySearch } from '../axios/api'

import { LOGIN_SUCCESS, COMMODITY_LIST, COMMODITY_INFO } from './action-type'

import { message } from 'antd'
import md5 from 'md5'


const userData = (userParam) => ({type: LOGIN_SUCCESS, data: userParam})

const commodityListData = (commodityListParam) => ({type: COMMODITY_LIST, data: commodityListParam})

const commodityInfoData = (param) => ({type: COMMODITY_INFO, data: param})

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

// 获取商品分类，品牌，
export const reqCommodityInfo = (commodityInfoParam) => {
    const param  = commodityInfoParam
    return async dispatch => {
        const {data} = await commoditySearch(param)
        dispatch(commodityInfoData(data))
    }
}