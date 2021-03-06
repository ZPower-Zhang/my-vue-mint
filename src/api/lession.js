import service from './index'

const getSendSMS = (params) => service.get('sendSMS', { params }) // 验证码获取
const getRegis = (params) => service.get('regis', { params }) // 注册
const getAuthcdkey = (params) => service.get('authcdkey', { params }) // 课程兑换
const getAuthSMS = (params) => service.get('authSMS', { params }) // 验证码校验
const getHome = (params) => service.get('home', { params }) // 首页
const getProinfo = (params) => service.get('getproinfo', { params }) // 详情
const getOrderList = (params) => service.get('getOrderList', { params }) // 获取订单列表
const getAuth = (params) => service.get('auth', { params }) // 微信登陆
const getMyLearningList = (params) => service.get('getMyLearningList', { params }) // 我的学习列表
const getMyCollectionList = (params) => service.get('getMyCollectionList', { params }) // 我的收藏列表
const getWxPay = (params) => service.get('wxpay', { params }) // 微信内支付
const getWxPayNative = (params) => service.get('wxpayNative', { params }) // 微信二维码支付
const getAliPayNative = (params) => service.get('alipayNative', { params }) // 支付宝二维码支付
const getAliPayH5 = (params) => service.get('alipayH5', { params }) // 支付宝H5支付
const getWxPayH5 = (params) => service.get('wxpayH5', { params }) // 微信H5支付
const getWxRepay = (params) => service.get('wxrepay', { params }) // 微信重新支付
const getConsult = (params) => service.get('consult', { params }) // 咨询
const getCollection = (params) => service.get('collection', { params }) // 收藏
const getShare = (params) => service.get('getShare', { params }) // 分享
const getXXPXList = (params) => service.get('getXXPXlist', { params }) // 线下培训
const getYNZXList = (params) => service.get('getYNZXlist', { params }) // 业内资讯
const getKYZDList = (params) => service.get('getKYZDlist', { params }) // 科研指导
const getXSSPList = (params) => service.get('getXSSPlist', { params }) // 线上视频
const getCommentList = (params) => service.get('getComment', { params }) // 获取评论
const getComment = (params) => service.get('comment', { params }) // 评论
const getReplay = (params) => service.get('reply', { params }) // 回复
const getPayZero = (params) => service.get('payzero', { params }) // 0元报名

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
  getWxPayNative,
  getWxRepay,
  getConsult,
  getCollection,
  getShare,
  getXXPXList,
  getYNZXList,
  getKYZDList,
  getXSSPList,
  getCommentList,
  getComment,
  getReplay,
  getPayZero,
  getWxPayH5,
  getAliPayNative,
  getAliPayH5
}
