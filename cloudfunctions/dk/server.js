const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  env: 'kydk-9gefpree1ca906af'
})

//打卡
async function createClock(params){
  let { OPENID } = cloud.getWXContext();
  const res = await db.collection('clockList').add({
    data:{...params,userId:OPENID}
  })
  console.log('打卡',res)
  return res;
}

//打卡记录
async function getClockList(page,size){
  let { OPENID } = cloud.getWXContext();
  const res = await db.collection('clockList').where({
    userId:OPENID
  }).skip(page*size).limit(size).get();
  return res;
}

//更新打卡日期
async function updateClockDate(){
  let { OPENID } = cloud.getWXContext()
  return db.collection('userList').doc(OPENID).update({
    data: {nearClockDate:new Date().getTime()}})
}

module.exports={
  createClock:createClock,
  getClockList:getClockList,
  updateClockDate,updateClockDate,
};