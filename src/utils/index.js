// let Utils = class Utils {}
// 构造器函数
// 名称
import { getAuth } from '@/api/lession'
function Utils () {}

Utils.prototype = {
  getQueryString: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
  },
  async getOpenId () {
    let ret = await getAuth({})
    if (ret && ret.flag) {

    }
  }
}

let util = new Utils()

export default {
  util
}
