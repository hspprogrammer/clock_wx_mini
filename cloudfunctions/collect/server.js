const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  env: 'kydk-9gefpree1ca906af'
})

//请求所有的考研日期
async function getAllTest(){
  return db.collection('testTypes').orderBy('date', 'asc').get();
}

//更新用户信息
async function updateUserInfo(params){
  let { OPENID } = cloud.getWXContext()
  return db.collection('userList').doc(OPENID).update({
    data: {...params}})
}

//获取用户信息
async function getUserInfo(){
  let { OPENID } = cloud.getWXContext()
  return db.collection('userList').doc(OPENID).get();
}

module.exports={
  getAllTest:getAllTest,
  updateUserInfo:updateUserInfo,
  getUserInfo,getUserInfo,
};