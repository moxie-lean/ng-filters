import angular from 'angular';

angular.module('lnFilters')
  .filter('readMore', readMore);

function readMore() {
  return function(text) {
    return text || 'Read more';
  };
}
