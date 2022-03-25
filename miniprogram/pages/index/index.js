// index.ts
// 获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad() {
  console.log('sss')
  },
  goDkRank(){
    wx.navigateTo({
      url: '/pages/dkRank/index',
    })
  },
  onUnload(){
  }
})
