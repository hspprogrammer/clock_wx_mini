// pages/my/index.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  //跳转打卡记录
  goDkRank(){
    wx.navigateTo({
      url: '/pages/dkLog/index',
    })
  },
  //编辑昵称头像
  goEditUserInfo(){
    wx.navigateTo({
      url: '/pages/collect/index',
    })
  }
})