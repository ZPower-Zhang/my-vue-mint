import service from './index'

const getSendSMS = (params) => service.get('sendSMS', {params}) // 验证码获取
const getRegis = (params) => service.get('regis', {params}) // 注册
const getAuthcdkey = (params) => service.get('authcdkey', {params}) // 课程兑换
const getAuthSMS = (params) => service.get('authSMS', {params}) // 验证码校验
const getHome = (params) => service.get('home',{params}) // 首页
const getProinfo = (params) => service.get('getproinfo',{params}) // 详情

export {
  getSendSMS,
  getRegis,
  getAuthcdkey,
  getAuthSMS,
  getHome,
  getProinfo
}