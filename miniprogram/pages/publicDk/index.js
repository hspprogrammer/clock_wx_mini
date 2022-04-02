const {getFileName } = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:"",
    image:'',
    fileList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //学习内容
  contentInput(e){
    const {value} = e.detail;
    this.setData({
      content:value
    })
  },
  //删除图片
  delImg(){
    this.setData({
      fileList:[]
    })
  },
  //选择图片
  chooseImg(e){
    const {url} = e.detail.file;
    wx.showLoading({
      title: '上传中',
    })
    wx.cloud.uploadFile({
      cloudPath: "images/"+getFileName(url), // 上传至云端的路径
      filePath: url, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        this.setData({
          image:res.fileID,
        })
        wx.cloud.getTempFileURL({
          fileList: [res.fileID],
          success: res => {
            wx.hideLoading();
            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1500
            })
            this.setData({
              fileList:[{
                url:res.fileList[0].tempFileURL,
                name:'sss'
              }],
            })
          },
          fail: console.error
        })
      },
      fail: console.error
    })
  },
  //打卡
  publicClock(){
    const {content,image} = this.data;
    console.log({content,image})
    if(!content) return wx.showToast({ title: '请填写学习内容', icon: 'none' });
    if(!image) return wx.showToast({ title: '请选择图片', icon: 'none' });
    wx.showLoading({
      title: '打卡中',
    })
    wx.cloud.callFunction({
      name: 'dk',
      data: {
        type:'create',
        content,
        image
      },
    }).then(({result})=>{
      wx.hideLoading();
      if(result.errMsg == 'collection.add:ok'){
        wx.showToast({
          title: '打卡成功',
          icon: 'success',
          duration: 1500
        })
        this.$storage('userInfo',{...this.$storage('userInfo'),nearClockDate:new Date().getTime()})
        wx.redirectTo({
          url: '/pages/dkLog/index'
        })
      }else{
        wx.showToast({
          title: '打卡失败，请重试',
          icon: 'error',
          duration: 1500
        })
      }
      
      
    })
  }
})