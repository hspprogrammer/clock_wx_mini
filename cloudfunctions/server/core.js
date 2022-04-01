const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const db = cloud.database({
  env: 'kydk-9gefpree1ca906af'
})
module.exports={
  cloud:cloud,
  db:db
}