let util = {}
util.title = function (title) {
  title = title || 'Xin Yue'
  window.document.title = title
}

util.openNewPage = function (vm, name, argu, query) {
}

util.toDefaultPage = function (routers, name, route, next) {
  let len = routers.length
  let i = 0
  let notHandle = true
  while (i < len) {
    if (routers[i].name === name && routers[i].children && routers[i].redirect === undefined) {
      route.replace({
        name: routers[i].children[0].name
      })
      notHandle = false
      next()
      break
    }
    i++
  }
  if (notHandle) {
    next()
  }
}

util.getRouterObjByName = function (routers, name) {
  if (!name || !routers || !routers.length) {
    return null
  }
  let routerObj
  for (let item of routers) {
    if (item.name === name) {
      return item
    }
    routerObj = util.getRouterObjByName(item.children, name)
    if (routerObj) {
      return routerObj
    }
  }
  return null
}

export default util
