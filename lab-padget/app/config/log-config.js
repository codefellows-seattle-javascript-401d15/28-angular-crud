'use strict';

// module.exports = ['$logProvider', logConfig];
//
// function logConfig($logProvider) {
//   $logProvider.debugEnabled(__DEBUG__);
// }

module.exports = ['$logProvider', function($logProvider) {
  $logProvider.debugEnabled(__DEBUG__);
}];
