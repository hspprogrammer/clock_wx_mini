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
async function getTestDate(){
  let { OPENID} = cloud.getWXContext() 
  const {data} = await db.collection('userList').doc(OPENID).get();
  if(!data.testType){
     const res = await db.collection('testTypes').orderBy('date', 'asc').limit(1).get();
     return res['data'][0]
  }else{
    const res = await db.collection('testTypes').doc(data.testType).get();
    return res['data']
  }
}

module.exports={
  getSwiper:getSwiper,
  getTestDate:getTestDate
}