// pages/trade/trade.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //价值
    arrayValue:['价值','0-59','60-99','100-199','200-299','300+'],
    indexValue: 0,
    //性质
    arrayChara:['性质','普通','独特','普通','传说'],
    indexChara: 0,
    //代数
    arrayNum:['代数','初代','二代','三代','四代','五代','六代','七代','八代','九代','十代','更多'],
    indexNum: 0,
    //性别
    arrayGender:['性别','弟弟','妹妹'],
    indexGender: 0,
    //页面配置  
    winWidth: 0,
    winHeight: 0,  
    // tab切换  
    currentTab: 0,  
    hasMore: false,
    isFirstLoad: true,
    moreHidden: 'none',
    msg: '没有更多文章了'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (!app.globalData.userInfo){
      wx.redirectTo({
        url: '../login/login?path=trade'
      })
    }
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });

  },
  turnToCatItem: function (e) {
    wx.navigateTo({
      url: '../catItem/catItem'
    })
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
  
  },
  /** 
   * 滑动切换tab 
   */
  bindChangeTab: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  // picker价值
  bindPickerChangeValue:function(e){
    this.setData({
      indexValue: e.detail.value
    })
  },
  // picker性质
  bindPickerChangeChara: function (e) {
    this.setData({
      indexChara: e.detail.value
    })
  },
  // picker代数
  bindPickerChangeNum: function (e) {
    this.setData({
      indexNum: e.detail.value
    })
  },
  // picker性别
  bindPickerChangeGender: function (e) {
    this.setData({
      indexGender: e.detail.value
    })
  },
})