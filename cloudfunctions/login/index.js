// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  env: 'kydk-9gefpree1ca906af'
})

// 登陆
exports.main = async (event, context) => {
  return new Promise(async(resolve,reject)=>{
    let { OPENID, APPID } = cloud.getWXContext()
    const {data} = await db.collection('userList').where({
      _id:OPENID||''
    }).get()
    
    if(data.length === 0){
      const testInfo = await db.collection('testTypes').orderBy('date', 'asc').limit(1).get();
      const newUSer = {
        _id:OPENID,
        groupName:'',
        isUse:true,
        nickImage:'cloud://kydk-9gefpree1ca906af.6b79-kydk-9gefpree1ca906af-1305408647/icon/头像.png',
        nickName:'微信用户',
        tel:'',
        nearClockDate:0,
        testType:testInfo.data[0]['_id'],
        created: new Date().getTime()
      };
      await db.collection('userList').add({
          data:newUSer
      })
      resolve(newUSer)
    }else{
      resolve(data[0])
    }
  })
  
  
}