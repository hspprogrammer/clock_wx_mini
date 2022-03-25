import {appInit}  from "./utils/index"
App({
  events: {},
  globalData: {
  },
  onLaunch(option) {
    appInit.call(this,option);
  },
})