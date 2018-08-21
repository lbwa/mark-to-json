const fs = require('fs')
const path = require('path')

function hasDir (dir: string) {
  try {
    // 确保文件夹存在，此处不用确认文件是否存在
    fs.accessSync(dir, fs.constants.F_OK)
  } catch (err) {
    return false
  }
  return true
}

function createDir (dest: string) {
  const dirname = path.dirname(dest)
  if (!hasDir(dirname)) {
    fs.mkdirSync(dirname)
  }
}

function isString (target: any) {
  return typeof target === 'string'
}

function stringify (target: any) {
  return isString(target) ? target : JSON.stringify(target)
}

export {
  hasDir,
  createDir,
  stringify
}
