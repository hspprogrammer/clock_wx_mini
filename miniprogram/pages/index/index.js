// index.ts
// 获取应用实例
const app = getApp()

Page({
  data: {
    time: 30 * 60 * 60 * 1000,
    timeData: {},
    swiperList:[],
    testName:'',
    loading:true
  },
  onLoad() {
    this.getHomeData()
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
  },
  //获取数据
  getHomeData(){
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'home',
      data: {
        userId:''
      },
    }).then(({result})=>{
      wx.hideLoading()
      this.setData({
        swiperList:result.swiper,
        loading:false,
        time:result.testInfo[0].date -new Date().getTime(),
        testName:result.testInfo[0].dateName
      })
    })
    
  }
})
