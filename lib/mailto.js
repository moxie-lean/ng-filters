'use strict';

angular
  .module('lnFilters')
  .filter('mailto', mailto);

function mailto() {
  return function(link) {
    return link.indexOf('@') === -1 ? link : 'mailto:' + link;
  };
}
