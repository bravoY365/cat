// pages/catMix/catMix.js
import { getCatDetail} from '../../network/protocol.js';
const app = getApp();
Page({
  data: {
    //猫咪故事
    catStory: {
      autoplay: true,
      interval: 3000,
      duration: 500,
      circular: true,
      current: 0,
    },
    catStoryList:[],
    catDetail:{
    },
    //猫咪故事_作者信息
    catStoryDesc: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id){
      getCatDetail({
        data:{
          id: options.id,
          is_article:true
        },
        success:res=>{
          let artList = res.articleList||[];
          let catName = res.name;
          wx.setNavigationBarTitle({
            title: catName,
          })
          delete res.articleList
          this.setData({
            catDetail:res,
            catStoryList:artList
          });
        }
      });
    }
  },
  //点击跳转故事详情
  turnToStoryDetail: function () {
    wx.navigateTo({
      url: '../storyDetail/storyDetail',
    })
  },
  //跳转到个人主页 
  turnToOthersPage:function(){
    wx.navigateTo({
      url:'../othersPage/othersPage',
    })
  },
  turnToGeneGain:function(e){
    wx.navigateTo({
      url: '../geneGain/geneGain?id=' + e.currentTarget.dataset.id,
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