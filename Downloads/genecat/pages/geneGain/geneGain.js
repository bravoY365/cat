// pages/geneGain/genegGain.js
import { getCatDetail, getMyWallet} from '../../network/protocol.js';
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    catDetail:{},
    walletList:[],
    isShow: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options={}) {
    let id = options.id;
    if (id) {
      getCatDetail({
        data: {
          id: id
        },
        success: res => {
          this.setData({
            catDetail: res,
          });
        }
      });
      getMyWallet({
        data:{
          id: app.globalData.openid,
        },
        success: res => {
          this.setData({
            walletList: res,
          });
        }
      })
    }
  },
  /* 支付钱包展开，收起 */
  expandDetail: function (e) {
    var id=e.currentTarget.dataset.id;
    if (id === this.data.isShow) id = "";
    this.setData({
      isShow: id
    });
  },
  searchBtn: function (e) {
    console.log("你点击了弹出键盘")
  }, 
  submitWallet: function (e) {
    console.log(123);
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 1000,
      mask: true
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
  
  }
})