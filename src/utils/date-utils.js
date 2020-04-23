let dateUtils = {}
dateUtils.formatDate = function (date) {
  if (date) {
    return new Date(date).toISOString().substring(0, 19).replace('T', ' ')
  }
  return ''
}

export default dateUtils
