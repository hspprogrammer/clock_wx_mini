// index.ts
// 获取应用实例
const app = getApp()

Page({
  data: {
    time: 30 * 60 * 60 * 1000,
    timeData: {},
  },
  onLoad() {
  console.log('sss')
  },
  // 倒计时
  onChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },
  //去打卡
  goPublicDk(){
    wx.navigateTo({
      url: '/pages/publicDk/index',
    })
  }
})
