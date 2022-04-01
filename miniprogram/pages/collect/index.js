
Page({
  data: {
    testTypes:[],//考研日期
    userInfo:{
      created: 0,
      groupName: "",
      isUse: true,
      nickImage: "",
      nickName: "",
      tel: "",
      testType: "",
      _id: ""
    }
  },
  onLoad: function (options) {
    this.setData({
      userInfo:this.$storage('userInfo')
    });
    this.getAllTest()
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    console.log({avatarUrl})
    wx.cloud.uploadFile({
      cloudPath: avatarUrl.replace('http://tmp/',''), // 上传至云端的路径
      filePath: avatarUrl, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        console.log(res.fileID)
        this.setData({
          ['userInfo.nickImage']:res.fileID
        })
      },
      fail: console.error
    })
  },
  //获取所有考研日期
  getAllTest(){
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'collect',
      data: {
        type:'testList'
      },
    }).then(({result})=>{
      wx.hideLoading()
      this.setData({
        testTypes:result.data
      })
    })
  },
  //选择考研日期
  bindPickerChange(e){
    console.log(e)
    const index = parseInt(e.detail.value)
    this.setData({
      ['userInfo.testType']:this.data.testTypes[index]._id
    })
  },
})