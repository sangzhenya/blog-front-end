let dateUtils = {};
// 2018-10-15 12:90
dateUtils.formatDate = function (date) {
  return date[0] + '-' + date[1] + '-' + date[2] + ' ' + date[3] + ':' + date[4];
};

export default dateUtils;
