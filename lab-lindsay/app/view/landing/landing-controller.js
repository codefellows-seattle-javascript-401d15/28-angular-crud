'use strict';

require('./_landing.scss')

module.exports = [
  '$log',
  '$location',
  '$rootScope',
  'authService',
  LandingController]

function($log, $location, authService) {
  this.$onInit = () => {
    let url = $location.url()
    $log.log('url', url)
    this.showSignup = url === '/join#signup' || url === '/join'
  }
}
