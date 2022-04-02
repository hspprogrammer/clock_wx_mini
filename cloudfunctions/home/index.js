const {getSwiper,getTestDate} = require('./server')
const cloud = require('wx-server-sdk')

// 云函数入口函数
exports.main = async (event, context) => {
  
  const [swiper,testInfo] = await Promise.all([
    getSwiper(),
    getTestDate()
  ])
  return {
    swiper:swiper.data,
    testInfo:testInfo
  }
}