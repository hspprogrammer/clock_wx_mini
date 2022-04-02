const {createClock,getClockList,updateClockDate} = require('./server.js');

// 云函数入口函数
exports.main = async (event, context) => {
  const {type} = event;
  if(type == 'create'){
    const {content,image} = event;
    const res = await createClock({content,image,created:new Date().getTime()});
    if(res.errMsg == 'collection.add:ok'){
      updateClockDate()
    }
    return res;
  }else if(type == 'get'){
    const {page,size} = event;
    const res = await getClockList(page-1,size);
    return res;
  }
}