// components/tabBar/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //当前页面
    nowIndex:{
      type:Number,
      value:0
    },
    //tab 上的文字默认颜色
    color:{
      type:String,
      value:"#333"
    },
    //tab 上的文字选中时的颜色
    selectedColor:{
      type:String,
      value:"#54AFFE"
    }
  },
  data: {
    tabBars:[
      {
        path:"/pages/index/index",
        name:"首页",
        icon:"https://6b79-kydk-9gefpree1ca906af-1305408647.tcb.qcloud.la/icon/%E9%A6%96%E9%A1%B5.png?sign=4cb800a3a2e9c401b6f707bb0c51225a&t=1648199869",
        activeIcon:"https://6b79-kydk-9gefpree1ca906af-1305408647.tcb.qcloud.la/icon/%E9%A6%96%E9%A1%B5%20(1).png?sign=566ee1b9552037a52d8a894e65266009&t=1648199907"
      },
      {
        path:"/pages/my/index",
        name:"我的",
        icon:"https://6b79-kydk-9gefpree1ca906af-1305408647.tcb.qcloud.la/icon/%E6%88%91%E7%9A%84s.png?sign=ac843e961fca0924aff9da7223160805&t=1648200010",
        activeIcon:"https://6b79-kydk-9gefpree1ca906af-1305408647.tcb.qcloud.la/icon/%E6%88%91%E7%9A%84.png?sign=5bef691a6562e7a16e6b8738b8c438db&t=1648198153"
      }
    ]
  },
  attached () {
      wx.hideTabBar();
  },
  methods: {
    changeRoute(e){
      const {path} = e.currentTarget.dataset;
      wx.switchTab({
        url: path
      })
    }
  }
})
