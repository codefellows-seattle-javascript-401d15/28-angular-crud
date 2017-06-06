'use strict';

require('./_navbar.scss');

module.exports = {
  template: require('./navbar.html'),
  controllerAs: 'navbarCtrl',
  controller: [
    '$log',
    NavbarController,
  ],
};

function NavbarController($log) {
  $log.debug('NavbarController');

}
