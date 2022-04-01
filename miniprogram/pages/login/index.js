// pages/login/index.js
Page({
  data: {
    value:""
  },
  onLoad: function (options) {

  },
  //获取手机号
  login(e){
    wx.login({
      success (res) {
        console.log( res)
      }
    })
  }
})