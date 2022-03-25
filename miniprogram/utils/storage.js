let storageObj = {};
// 存储数据
function setStorage(key,value){
  storageObj = {...storageObj,...{[key]:value}}
  wx.setStorage({
    key: key,
    data: value,
  })
}
//获取数据
function getStorage(key){
  if(storageObj[key]) return storageObj[key];
  let value = wx.getStorageSync(key)
  if(value) {
    storageObj = {...storageObj,...{[key]:value}}
    return value;
  }
  console.error(`未找到${key}属性的值，请检查后重新获取。`)
  return value;
}

//移除
function removeStorage(key){
  if(storageObj[key]){
    delete storageObj[key]
  }
  wx.removeStorageSync(key)
}

module.exports={
  setStorage:setStorage,
  getStorage:getStorage,
  removeStorage:removeStorage
}