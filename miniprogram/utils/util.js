

function getFileName(name){
  let pos = name.lastIndexOf('\/');
  return name.substring(pos + 1).split('.')[0]
}

module.exports ={
  getFileName:getFileName
}