'use strict';

require('./_signup.scss');

module.exports = {
  template: require('./signup.html'),
  controllerAs: 'signupCtrl',
  controller: [
    '$log',
    '$location',
    '$window',
    'authService',
    SignupController,
  ],
};

function SignupController($log, $location, $window, authService) {
  $log.debug('SignupController');

  if ($window.localStorage.length) {
    authService.getToken()
    .then(() => $location.url('/home'));
  }

  this.signup = function(user) {
    $log.debug('signupCtrl.signup()');

    return authService.signup(user)
    .then(() => $location.url('/home'));
  };
}
