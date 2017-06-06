'use strict'

module.exports = [
  '$log',
  '$location',
  // '$rootScope',
  // 'authService',
  function($log, $location){
    this.$onInit = () => {
      this.title = 'Please sign in'
      let url = $location.url()
      this.showSignup = url === '/join#signup' || url === '/join'
    }
  }
]
