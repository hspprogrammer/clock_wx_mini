import {appInit,checkUpdate}  from "./utils/index"
App({
  events: {},
  globalData: {
    userId:''
  },
  onLaunch(option) {
    checkUpdate();
    this.globalData.userId = '';
    appInit.call(this,option);
  },
})