// pages/othersPage/othersPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //猫咪故事
    catStory: {
      list: [
        {
          imgUrls: "../../images/1.jpg",
          desc: "小猫1",
          logo: "",
          name: "巴拉巴拉",
          skim: 11,
          reply: 111
        },
        {
          imgUrls: "../../images/3.jpg",
          desc: "小猫2",
          name: "我是me",
          skim: 22,
          reply: 222
        },
        {
          imgUrls: "../../images/8.jpg",
          desc: "小猫3",
          logo: "",
          name: "独孤吸猫",
          skim: 33,
          reply: 333
        },
        {
          imgUrls: "../../images/16.jpg",
          desc: "小猫4",
          logo: "",
          name: "再见",
          skim: 44,
          reply: 444
        }
      ],
      autoplay: true,
      interval: 3000,
      duration: 500,
      circular: true,
      current: 0,
    },
    //猫咪故事_作者信息
    catStoryDesc: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})