// plugin/components/msg-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msgItem:{
      type:Object,
      value:{}
    },
    imUserId:{
      type:String,
      value:''
    },
    otherImg:{
      type:String,
      value:""
    },
    //上一条消息时间戳
    lastTimestamp:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
