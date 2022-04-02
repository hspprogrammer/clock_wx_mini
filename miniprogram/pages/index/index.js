// index.ts
// 获取应用实例
const app = getApp()

Page({
  data: {
    time: 30 * 60 * 60 * 1000,
    timeData: {},
    swiperList:[],
    testName:'',
    loading:true,
  },
  onLoad() {
    this.getHomeData()
    this.nearClockDate = this.$storage('userInfo')['nearClockDate'] || 0;
  },
  // 倒计时
  onChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },
  //去打卡
  goPublicDk(){
    if(this.nearClockDate > new Date(new Date().toLocaleDateString()).getTime() ){
      wx.showToast({
        title: '今天已经打过卡了',
        icon: 'none'
      })
    }else{
      wx.navigateTo({
        url: '/pages/publicDk/index',
      })
    }
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
      wx.stopPullDownRefresh()
      this.setData({
        swiperList:result.swiper,
        loading:false,
        time:result.testInfo.date -new Date().getTime(),
        testName:result.testInfo.dateName
      })
    })
    
  },
  //下拉刷新
  onPullDownRefresh(){
    this.getHomeData()
  }
})
