'use strict'

module.exports = [
  '$log',
  '$rootScope',
  // '$window', $window, $location, authService,
  // '$location',
  // 'authService',
  'galleryService',
  function($log, $rootScope, galleryService){
    this.$onInit = () => {
      $log.debug('#HomeController()')
      // if(!$window.localStorage.Token){
      //   authService.getToken()
      //   .then(
      //     () => $location.url('/home')
      //     // () => $location.url('/signup')
      //   )
      // }
      this.title = 'Welcome to hell'
      this.galleries = []

      this.fetchGalleries = () => {
        return galleryService.fetchGalleries()
        .then(galleries => this.galleries = galleries)
        .catch(err => $log.error(err))
      }

      $rootScope.$on('locationChangeSuccess', this.fetchGalleries)
      this.fetchGalleries()
    }
  }
]
