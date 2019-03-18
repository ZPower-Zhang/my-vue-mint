import axios from 'axios'
export default {
 
    wxShowMenu:  function(link,title,desc,imgUrl) {
        // alert(link)
        axios.get('http://train.ksmedtech.com/backend/getShare',{
    params:
        { //请求参数
         shareUrl : link.split('#')[0]}}).then(function(res) {
            
            var getMsg = res.data.data;
            // alert(link)
            wx.config({
 
                debug: false, //生产环境需要关闭debug模式
 
                appId: getMsg.appId, //appId通过微信服务号后台查看
 
                timestamp: getMsg.timestamp, //生成签名的时间戳
 
                nonceStr: getMsg.nonceStr, //生成签名的随机字符串
 
                signature: getMsg.signature, //签名
 
                jsApiList: [ //需要调用的JS接口列表
 
                    'updateAppMessageShareData', //分享给好友
 
                    'updateTimelineShareData', //分享到朋友圈
 
                    // 'showMenuItems',
 
                    // 'hideMenuItems'
 
                ]
 
            });
 
            wx.ready(function() {
                 //分享到朋友圈

                wx.updateTimelineShareData({
 
                    title: title, // 分享标题
 
                    desc: desc, //分享描述
 
                    link: link.split('#')[0]+'#'+link.split('#')[1], // 分享链接
 
                    imgUrl: imgUrl // 分享图标
 
                });
 
 
 
                //分享给朋友
 
                wx.updateAppMessageShareData({
 
                    title: title, // 分享标题
 
                    desc: desc, // 分享描述
 
                    link: link.split('#')[0]+'#'+link.split('#')[1], // 分享链接
 
                    imgUrl: imgUrl // 分享图标
 
                });
 
            });
 
        })
 
    }
 
}