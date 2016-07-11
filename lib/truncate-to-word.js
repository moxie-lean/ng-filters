'use strict';

angular.module( 'lnFilters' )
  .filter( 'truncateToWord', truncateToWord );

function truncateToWord() {

  return function ( input, chars ) {

    if ( isNaN( chars ) ) return input;

    if ( chars <= 0 ) return '';

    if ( input && input.trim().length > chars ) {
      input = input.trim().substring( 0, chars );

      var lastspace = input.lastIndexOf( ' ' );

      if ( lastspace !== -1 ) {
        input = input.substr( 0, lastspace );
      }

      return input + '…';
    }

    return input;
  }
}
