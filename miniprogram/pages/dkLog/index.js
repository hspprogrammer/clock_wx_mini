
Page({
  data: {
    logList:[],
    loading:true,
    isHasMore:true
  },
  onLoad: function (options) {
    this.page = 1;
    this.size = 10;
    this.getDkLog()
  },
  onReachBottom: function () {
    if(!this.data.isHasMore) return null;
    this.page ++;
    this.getDkLog()
  },
  //获取打卡记录
  getDkLog(){
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'dk',
      data: {
        type:'get',
        page:this.page,
        size:this.size
      },
    }).then(({result})=>{
      wx.hideLoading()
      this.setData({
        logList:[...this.data.logList,...result.data],
        loading:false,
        isHasMore:!(result.data.length < this.size)
      })
    })
  },
  //预览图片
  previewImg(e){
    const {url} = e.currentTarget.dataset
    wx.previewMedia({
      sources:[{
        url:url,
        type:'image',
      }]
    })
  }
})