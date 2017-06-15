'use strict';

// require('./_logout.scss');

module.exports = {
  template: require('./logout.html'),
  controller: ['$log', '$location', 'authService', LogoutController],
  controllerAs: 'logCtrl',
};

function LogoutController($log, $location, authService) {
  $log.debug('LogoutController');

  this.logout = function() {
    $log.debug('#logoutCtrl.logout()');

    authService.logout(this.user)
    .then(() => $location.url('/join'));
  };
}
