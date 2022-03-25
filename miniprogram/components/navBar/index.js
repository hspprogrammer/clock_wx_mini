// components/navBar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:''
    }
  },
  data: {
    statuBarHeight:0,
    menuWidth:0,//胶囊宽度
    isHome:true
  },
  attached(){
    const {width} = wx.getMenuButtonBoundingClientRect();
    this.setData({
      statuBarHeight:wx.getSystemInfoSync().statusBarHeight,
      menuWidth:width,
      isHome:getCurrentPages().length == 1
    })

  },
  methods: {
    //点击左上角
    clickLeft(){
      wx.navigateBack()
    }
  }
})
