// 云函数入口文件
const {getAllTest} = require('../server/testType.js')


// 云函数入口函数
exports.main = async (event, context) => {
  const {type} = event;
  if(type == 'testList'){
    const res = await getAllTest();
    return res;
  }
}