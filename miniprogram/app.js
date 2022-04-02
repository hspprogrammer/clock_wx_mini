import {appInit}  from "./utils/index"
App({
  events: {},
  globalData: {
    userId:''
  },
  onLaunch(option) {
    this.globalData.userId = '';
    appInit.call(this,option);
  },
})