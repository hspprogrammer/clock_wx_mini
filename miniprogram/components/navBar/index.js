
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:''
    },
    //是否有阴影
    isShadow:{
      type:Boolean,
      value:false
    },
    isShowLeftBtn:{
      type:Boolean,
      value:true
    },
    //类型
    // fixed 固定
    // ordinary 普通的 不固定
    // transparent 透明不固定的
    // transparentFixed  透明固定的
    type:{
      type:String,
      value:"fixed"
    }
  },
  data: {
    statuBarHeight:0,
    menuWidth:0,//胶囊宽度
    isHome:true,//显示返回还是首页按钮
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
      if(this.data.isHome){
        wx.switchTab({
          url: '/pages/index/index'
        })
        
      }else{
        wx.navigateBack()
      }
    },
    //阻止穿透
    empty(){

    }
  }
})
