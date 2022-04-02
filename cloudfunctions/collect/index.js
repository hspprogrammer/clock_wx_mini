// 云函数入口文件
const {getAllTest,updateUserInfo,getUserInfo} = require('./server.js')


// 云函数入口函数
exports.main = async (event, context) => {
  const {type} = event;
  if(type == 'testList'){
    const res = await getAllTest();
    return res;
  }else if(type == 'updateUserInfo'){
    console.log({event})
    const {groupName,nickImage,nickName,tel,testType} = event;
    await updateUserInfo({groupName,nickImage,nickName,tel,testType});
    const res = await getUserInfo()
    return res;
  }
}