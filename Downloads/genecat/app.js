//app.js
import { getUserAppId, updateUserInfo} from './network/protocol.js'
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        getUserAppId({
          data:{
            code:res.code
          },
          success:res=>{
            this.globalData.openid = res.openid;
            this.updateUserInfo();
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    });
    wx.getSetting({
      success: res => {
        console.log(res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setUserInfo(res.userInfo);
            }
          })
        } else {
          wx.getUserInfo({
            success: res => {
              this.setUserInfo(res.userInfo);
            }
          })
        }
      }
    })
  },
    // 获取用户信息
  updateUserInfo:function(){
    let openid = this.globalData.openid;
    let userInfo = this.globalData.userInfo;
    if (openid && userInfo){
      let data = {
        open_id:openid,
        nick_name: userInfo.nickName,
        avatar: userInfo.avatarUrl,
        userInfo:JSON.stringify(userInfo)
      };
      updateUserInfo({
        data:data,
        success:res=>{
          console.log(res);
        }
      })
    }
  },
  setUserInfo: function (result){
    // 可以将 res 发送给后台解码出 unionId
    this.globalData.userInfo = result
    if (this.userInfoReadyCallback) {
      this.userInfoReadyCallback(res)
    }
    this.updateUserInfo();
  },
  globalData: {
    openid:'',
    userInfo: null
  }
})