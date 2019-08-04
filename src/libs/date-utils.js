let dateUtils = {};
dateUtils.formatDate = function (date) {
  if (date) {
    return date[0] + '-' + date[1] + '-' + date[2] + ' ' + date[3] + ':' + date[4];
  }
  return '';
};

export default dateUtils;
