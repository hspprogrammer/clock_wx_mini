// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const {ip,bssid,gender,nickImg,nickName} = event;
  console.log({event})
  return db.collection('wifi_list').doc(bssid+ip).get().then(res => {
    // res.data 包含该记录的数据
    return {errMsg: "collection.add:ok",_id: bssid+ip};
  }).catch((err)=>{
    return  db.collection('wifi_list').add({
      data:{
        _id:bssid+ip,
        bssid:bssid,
        gender:gender,
        ip:ip,
        nick_img:nickImg,
        nick_name:nickName
      }
    })
  })
  
  return {code:0,data:{}};
}