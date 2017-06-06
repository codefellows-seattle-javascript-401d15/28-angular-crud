'use strict'

module.exports = [
  '$log',
  '$location',
  '$rootScope',
  'authService',
  function($log, $location, authserver){
    this.$onInit = () => {
      let url = $location.url()
      $log.log('url', url)
      this.showSignup = url === '/join$signup' || url === '/join'
    }
  }
]
