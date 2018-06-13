const app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindViewTap:function(){

  },
  onLoad: function (options) {
    
  },
  returnToHome:function(){
    wx.switchTab({
      url: '../index/index'
    })
  },
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo){
      app.setUserInfo(e.detail.userInfo);
      wx.switchTab({
        url: '../index/index'
      })
    }
  }
})
