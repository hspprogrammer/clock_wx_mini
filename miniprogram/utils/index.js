import "./rewrite";
import {setStorage} from "./storage"

function appInit(option){
  wx.cloud.init({
    env:"kydk-9gefpree1ca906af",
    traceUser: true,
  })
  wx.cloud.callFunction({
    name: 'login',
    data: {},
  }).then(({result})=>{
    this.globalData.userId = result._id;
    setStorage('userInfo',result)
    if (this.checkLoginByLoad) this.checkLoginByLoad();
    if (this.checkLoginByShow) this.checkLoginByShow();
  })
}

/**
 * @desc 设备上固定px长度转换
 * @param {*} rpx 必传
 */
 function rpx2px (rpx) {
  const sysinfo = wx.getSystemInfoSync();
  return Math.floor(rpx / 750 * sysinfo.windowWidth);
}

function px2rpx (px) {
  const sysinfo = wx.getSystemInfoSync();
  return Math.floor(px * 750 / sysinfo.windowWidth);
}

module.exports = {
  appInit:appInit,
  rpx2px:rpx2px,
  px2rpx:px2rpx
}