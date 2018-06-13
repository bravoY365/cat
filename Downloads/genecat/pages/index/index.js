//index.js
//获取应用实例
const app = getApp()
import {
  getCatStoryList,
  getCatNewComplex,
  getCatOriginal
} from '../../network/protocol.js';
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //猫咪故事
    catStory: {
      autoplay: true,
      interval: 3000,
      duration: 500,
      circular: true,
      current: 0,
    },
    catStoryList: [],
    //猫咪故事_作者信息
    catStoryDesc: {},
    //最新合成
    catComplex: {
      winWidth: "100%",
      winHeight: 200,
      allWidth: "100%",
      itemWidth: 100,
      curIndex: 3,
      x: 100,
    },
    //初代猫咪
    catComplexList: [],
    //初代猫咪
    catOriginal: {
      page:1,//当前页
      pageCount:9,//每页请求数
      allCount: 0,//总量
      list: []
    },
    catOriginalList:[],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getCatStoryList();
    this.getCatNewComplex();
    this.getCatOriginal();
    let arrayItem = this.data.catStory.list;
  },
  /*猫咪故事*/
  getCatStoryList:function(){
    getCatStoryList({
      success: res => {
        this.setData({
          catStoryList: res,
          catStoryDesc: res[0]
        })
      }
    });
  },
  //获取最近合成
  getCatNewComplex:function(){
    getCatNewComplex({
      success: res => {
        console.log(res);
        this.setData({
          catComplexList: res,
        })
      }
    });
  },
  //获取初代猫咪
  getCatOriginal: function () {
    let item = this.data.catOriginal;
    getCatOriginal({
      data:{
        page: item.page,
        count: item.pageCount
      },
      success: res => {
        item.page++;
        item.allCount = res.count;
        item.list = res.rows;
        this.setData({
          catOriginal: item,
        })
      }
    });
  },
  //点击跳转故事详情
  turnToStoryDetail: function () {
    wx.navigateTo({
      url: '../storyDetail/storyDetail',
    })
  },
  //猫咪故事_查看更多
  turnToCatStoryMore:function(e){
    wx.navigateTo({
      url: '../storyMore/storyMore'
    })
  },
  //猫咪故事_作者信息
  storyDesc:function(e) {
    let arrayItem = this.data.catStoryList;
    let index = e.detail.current;
    this.setData({
      catStoryDesc: arrayItem[index]
    })
  }, 

  /*
      最新和成
  */
  //触摸开始的事件
  swiperTouchstart: function (e) {
    console.log('touchstart',e);
    let startClinetX = e.changedTouches[0].clientX;
    this.setData({
      startClinetX: startClinetX, //触摸开始位置；
      startTimestamp: e.timeStamp, //触摸开始时间；
    })
  },
  //触摸移动中的事件
  swiperTouchmove: function (e) {
  },

  /*
      初代猫咪
  */
  //初代猫咪_查看更多
  // turnToCatFirstMore: function (e) {
  //   wx.navigateTo({
  //     url: '../catFirstMore/catFirstMore'
  //   })
  // },
  turnToCatDetail:function(e){
    wx.navigateTo({
      url: '../catDetail/catDetail?id=' + e.currentTarget.dataset.id
    })
  }
})
