'use strict';


angular
  .module('app')
  .filter('html', html);

trusted.$inject = ['$sce'];

function html($sce) {
  var div = document.createElement('div');
  return function(text) {
    div.innerHTML = text;
    return $sce.trustAsHtml(div.textContent);
  };
}