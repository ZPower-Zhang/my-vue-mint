import axios from 'axios'
// import config from './config'
import qs from 'qs'

// 取消重复请求
let pending = []

const CancelToken = axios.CancelToken
const removePending = (config) => {
  for (let p in pending) {
    let item = p
    let list = pending[p]
    // 当前请求在数组中存在时执行函数体
    if (list.url === config.url + '&request_type=' + config.method) {
      // 执行取消操作
      list.cancel()
      // 从数组中移除记录
      pending.splice(item, 1)
    }
  }
}

const service = axios.create({
  baseURL: '/backend',
  // 请求后的数据处理
  transformResponse: [function (data) {
    return data
  }],
  // 查询对象序列化函数
  paramsSerializer: function (params) {
    return qs.stringify(params)
  },
  // 超时设置s
  timeout: 1000 * 30,
  // 跨域是否带Token
  withCredentials: true,
  responseType: 'json',
  // xsrf 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  // 最多转发数，用于node.js
  maxRedirects: 5,
  // 最大响应数据大小
  maxContentLength: 2000,
  // 自定义错误状态码范围
  validateStatus: function (status) {
    return status >= 200 && status < 300
  }
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    removePending(config)
    config.cancelToken = new CancelToken((c) => {
      pending.push({
        url: config.url + '&request_type=' + config.method,
        cancel: c
      })
      if (config.method === 'post') {
        config.data = config.data || {}
      } else if (config.method === 'get') {
        config.params = config.params || {}
      }
    })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  res => {
    removePending(res.config)
    const ret = res.data
    const code = ret.statusCode
    if (code === '000000') {
      let obj = {}
      obj = {
        flag: true,
        code: 0,
        data: ret.data,
        msg: ret.msg
      }
      return obj
    } else {
      console.error(res)
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
