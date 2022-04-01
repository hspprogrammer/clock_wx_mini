const {getSwiper,getTestDate} = require('./server')
const cloud = require('wx-server-sdk')

// 云函数入口函数
exports.main = async (event, context) => {
  let { OPENID, APPID } = cloud.getWXContext() 
  console.log({OPENID, APPID})
  const [swiper,testInfo] = await Promise.all([
    getSwiper(),
    getTestDate(event.userId || '')
  ])

  return {
    swiper:swiper.data,
    testInfo:testInfo.data
  }
}