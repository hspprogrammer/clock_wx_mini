import {appInit}  from "./utils/index"
App({
  events: {},
  globalData: {
    userId:''
  },
  onLaunch(option) {
    appInit.call(this,option);
  },
})