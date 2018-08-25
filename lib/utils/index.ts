function isString (target: any) {
  return typeof target === 'string'
}

function stringify (target: any) {
  return isString(target) ? target : JSON.stringify(target)
}

export {
  stringify
}
