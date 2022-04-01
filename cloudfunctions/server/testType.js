const {cloud,db} = require("./core");

//请求所有的考研日期
async function getAllTest(){
  return db.collection('testTypes').orderBy('date', 'asc').get();
}

module.exports={
  getAllTest:getAllTest
};
