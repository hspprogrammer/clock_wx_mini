const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  env: 'kydk-9gefpree1ca906af'
})

// 获取轮播
async function getSwiper(){
  return db.collection('swiperList').where({
    "isUse":true
  }).get();
}

// 获取九宫格

//获取考研时间
async function getTestDate(userId){
  if(!userId){
    return db.collection('testTypes').orderBy('date', 'asc').limit(1).get()
  }
  return db.collection('userList').doc(userId).aggregate().lookup({
    from: 'testTypes',
    localField: 'testType',
    foreignField: '_id',
    as: 'testInfo',
  }).end()
}

module.exports={
  getSwiper:getSwiper,
  getTestDate:getTestDate
}