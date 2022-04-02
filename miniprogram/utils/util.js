

function getFileName(name){
  let pos = name.lastIndexOf('\/');
  return name.substring(pos + 1)
}

module.exports ={
  getFileName:getFileName
}