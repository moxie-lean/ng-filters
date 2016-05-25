'use strict';

angular
  .module('lnFilters')
  .filter('html', html);

html.$inject = ['$sce'];

function html($sce) {
  var div = document.createElement('div');
  return function(text) {
    div.innerHTML = text;
    return $sce.trustAsHtml(div.textContent);
  };
}
