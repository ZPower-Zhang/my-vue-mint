import service from './index'

const getSendSMS = (params) => service.get('sendSMS', {params}) // 验证码获取
const getRegis = (params) => service.get('regis', {params}) // 注册
const getAuthcdkey = (params) => service.get('authcdkey', {params}) // 课程兑换
const getAuthSMS = (params) => service.get('authSMS', {params}) // 验证码校验
const getHome = (params) => service.get('home', {params}) // 首页
const getProinfo = (params) => service.get('getproinfo', {params}) // 详情
const getOrderList = (params) => service.get('getOrderList', {params}) // 获取订单列表
const getAuth = (params) => service.get('auth', {params}) // 微信登陆
const getMyLearningList = (params) => service.get('getMyLearningList', {params}) // 我的学习列表
const getMyCollectionList = (params) => service.get('getMyCollectionList', {params}) // 我的收藏列表
const getWxPay = (params) => service.get('wxpay', {params}) // 支付
const getWxRepay = (params) => service.get('wxrepay', {params}) // 重新支付
const getConsult = (params) => service.post('consult', params) // 咨询
const getCollection = (params) => service.get('collection', {params}) // 收藏

export {
  getSendSMS,
  getRegis,
  getAuthcdkey,
  getAuthSMS,
  getHome,
  getProinfo,
  getOrderList,
  getAuth,
  getMyLearningList,
  getMyCollectionList,
  getWxPay,
  getWxRepay,
  getConsult,
  getCollection
}
