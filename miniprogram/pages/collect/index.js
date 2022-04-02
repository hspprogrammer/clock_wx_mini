
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
    const index = parseInt(e.detail.value)
    this.setData({
      ['userInfo.testType']:this.data.testTypes[index]._id
    })
  },
  //保存信息
  saveBtn(){
    const {groupName,nickImage,nickName,tel,testType} = this.data.userInfo;
    wx.showLoading({
      title: '保存中',
    })
    wx.cloud.callFunction({
      name: 'collect',
      data: {
        type:'updateUserInfo',
        groupName,
        nickImage,
        nickName,
        tel,
        testType
      },
    }).then(({result})=>{
      this.$storage('userInfo',result.data)
      this.setData({
        userInfo:result.data
      });
      wx.hideLoading();
      wx.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1500
      })
    })
  },
  //群昵称输入
  groupNameInput(e){
    const {value} = e.detail;
    this.setData({
      ['userInfo.groupName'] : value
    })
  },
  //手机号输入
  telInput(e){
    const {value} = e.detail;
    this.setData({
      ['userInfo.tel'] : value
    })
  },
  //昵称
  nickNameInput(e){
    const {value} = e.detail;
    this.setData({
      ['userInfo.nickName'] : value
    })
  }
})