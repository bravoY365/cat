const url = 'https://genecat.orbisterrarum.cn/wechat';
const myGet = (path,data={}, cb) => {
  wx.request({
    url: url + path, //仅为示例，并非真实的接口地址
    data:data,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      if (cb) cb(res.data);
    }
  })
}
const myPost = (path, data = {}, cb) => {
  wx.request({
    url: url + path, //仅为示例，并非真实的接口地址
    data: data,
    method:'POST',
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      if (cb) cb(res.data);
    }
  })
}
//获取open_id
export const getUserAppId = (obj={})=>{
  myGet('/user/jscode2session', obj.data, obj.success);
}
//更新用户信息
export const updateUserInfo = (obj={})=>{
  myPost('/user/update',obj.data,obj.sccess);
}
//获取我的钱包
export const getMyWallet = (obj={})=>{
  myGet('/wallet/list', obj.data, obj.success);
}

//获取首页文章推荐
export const getCatStoryList = (obj={})=>{
  myGet('/article/recommend', obj.data, obj.success)
}
//获取最新合成猫咪
export const getCatNewComplex = (obj = {}) => {
  myGet('/cats/compose/recently',obj.data, obj.success)
}
//获取初代猫列表
export const getCatOriginal = (obj = {}) => {
  myGet('/cats/original/list', obj.data, obj.success)
}
//获取猫咪详情
export const getCatDetail = (obj = {}) => {
  myGet('/cats/detail', obj.data, obj.success)
}