import * as api from './config'

/**
 * 登陆注册
 */
export const login = (param) => api.post('/api/login', param)

//平台用户登录
export const salesLogin = (param) => api.post('/api/login/plat', param)

//绑定平台用户
export const bindUser = (param) => api.post('/api/login/plat-user-bind', param)

// 获取短信验证码
export const smsVerification = (param) => api.get('/api/sms/verification', param)

/**
 * 供应商
 */
//订单列表
export const supplierOrderInfo = (param) => api.get('/api/suppliers/orders', param)

//订单详情
export const supplierOrderDetail = (param, id) => api.get('/api/suppliers/orders', param, id)

//订单取消
export const supplierOrderClose = (param, id) => api.put('/api/suppliers/orders/cancel', param, id)

//退货单列表
export const supplierReturnOrder = (param) => api.get('/api/suppliers/return-orders', param)

//退货单详情
export const supplierReturnOrderDetail = (param, id) => api.get('/api/suppliers/return-orders', param, id)

//退货单详情同意/拒绝退货
export const supplierReturnOrderReview = (param, id) => api.put('/api/suppliers/return-orders/auditor', param, id)

//退货单详情同意/拒绝收货
export const supplierReturnOrderReceipt = (param, id) => api.put('/api/suppliers/return-orders/receiving', param, id)

//退货原因列表
export const supplierReturnOrderReason = (param) => api.get('/api/suppliers/return-configs/reasons', param)

//添加退货原因
export const supplierReturnOrderReasonAdd = (param) => api.post('/api/suppliers/return-configs/reasons', param)

//修改退货原因
export const supplierReturnOrderReasonEdit = (param, id) => api.put('/api/suppliers/return-configs/reasons', param, id)

//删除退货原因
export const supplierReturnOrderReasonDel = (param, id) => api.deleted('/api/suppliers/return-configs/reasons', param, id)

//退货地址列表
export const supplierReturnOrderAddress = (param) => api.get('/api/suppliers/return-configs/addresses', param)

//添加退货地址
export const supplierReturnOrderAddressAdd = (param) => api.post('/api/suppliers/return-configs/addresses', param)

//修改退货地址
export const supplierReturnOrderAddressEdit = (param, id) => api.put('/api/suppliers/return-configs/addresses', param, id)

//删除退货地址
export const supplierReturnOrderAddressDel = (param, id) => api.deleted('/api/suppliers/return-configs/addresses', param, id)






// 商品列表
export const supplierCommodityList = (param) => api.get('/api/suppliers/commodities', param)

// 商品详情
export const supplierCommodityDetail = (param, id) => api.get('/api/suppliers/commodities', param, id)

//添加商品
export const supplierCommodityAdd = (param) => api.post('/api/suppliers/commodities', param)

//编辑商品
export const supplierCommodityEdit = (param, id) => api.put('/api/suppliers/commodities', param, id)

//商品税率
export const supplierCommoditytaxrate = (param) => api.put('/api/suppliers/commodities/tax-rate', param)

//商品状态
export const supplierCommodityStatus = (param) => api.put('/api/suppliers/commodities/status', param)

//价格列表
export const supplierCommodityPrice = (param) => api.get('/api/suppliers/commodity-prices', param)

//添加商品价格
export const supplierCommodityAddPrice = (param) => api.post('/api/suppliers/commodity-prices', param)

//删除商品价格
export const supplierCommodityDeletePrice = (param) => api.deleted('/api/suppliers/commodity-prices', param)

//特殊价格列表
export const supplierCommoditySpecialPrice = (param) => api.get('/api/suppliers/special-prices', param)

//添加商品特殊价格
export const supplierCommodityAddSpecialPrice = (param, id) => api.post('/api/suppliers/special-prices', param, id)

//删除商品特殊价格
export const supplierCommodityDeleteSpecialPrice = (param) => api.deleted('/api/suppliers/special-prices', param)







//仓库列表
export const supplierWarehouses = (param) => api.get('/api/suppliers/warehouses', param)



//客户列表
export const supplierClientList = (param) => api.get('/api/suppliers/customers', param)

// 修改客户信息
export const supplierClientEdit = (param, id) => api.put('/api/suppliers/customers', param, id)

//修改客户白条
export const supplierClientBai = (param, id) => api.put('/api/suppliers/customers/bai-tiao', param, id)

//账户信息
export const supplierClientInfo = (param) => api.get('/api/suppliers/account-flows', param)

//会员等级
export const supplierMemberLevel = () => api.get('/api/suppliers/member-levels')

//删除会员等级
export const supplierMemberLevelDel = (param) => api.deleted('/api/suppliers/member-levels', param)

//添加会员等级
export const supplierMemberLevelAdd = (param) => api.post('/api/suppliers/member-levels', param)

//销售统计
export const supplierSalesStatistics = (param) => api.get('/api/suppliers/orders-commodities', param)




 /**
  * 销售商
  */
//订单列表
export const sellerOrderInfo = (param) => api.get('/api/sellers/orders', param)

//订单详情
export const sellerOrderDetail = (param, id) => api.get('/api/sellers/orders', param, id)

//确认收货
export const sellerOrderReceipt = (param, id) => api.put('/api/sellers/orders/receiving', param, id)

//账户列表
export const sellerFinanceWallet = (param) => api.get('/api/sellers/accounts', param)

//账户流水
export const sellerFinanceBill = (param) => api.get('/api/sellers/account-flows', param)

//退货列表
export const sellerOrderReturn = (param) => api.get('/api/sellers/return-orders', param)

//退货详情
export const sellerOrderReturnDetail = (param, id) => api.get('/api/sellers/return-orders', param, id)

// 退货填写物流
export const sellerOrderReturnLogistics = (param, id) => api.put('/api/sellers/return-orders', param, id)

// 退货原因
export const sellerOrderReturnReason = (param) => api.get('/api/sellers/return-orders/reasons', param)

//新建退货单
export const sellerOrderReturnNew = (param, id) => api.post('/api/sellers/orders/return', param, id)





/**
 * 通用接口
 */

//商品分类
export const commodityClassifications = () => api.get('/api/commodity-classifications')

//商品品牌列表
export const commodityBrands = () => api.get('/api/commodity-brands')

//文件上传
export const uploadFiles = (param) => api.post('/api/files', param)

//支付
export const pay = (param) => api.post('/api/pay', param)

//支付回调
export const payCallback = (param) => api.get('/api/pay/status', param)

//商品条件查询接口
export const commoditySearch = (param) => api.get('/api/suppliers/searches', param)

