'use strict';

angular
  .module('lnFilters')
  .filter('trusted', trusted);

trusted.$inject = ['$sce'];

function trusted($sce) {
  return function(url) {
    return $sce.trustAsResourceUrl(url);
  };
}
