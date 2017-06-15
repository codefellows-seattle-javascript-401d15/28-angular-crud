'use strict'

// require('./_home.scss')

module.exports = ['$log','$rootScope','$window', 'galleryService', 'authService', '$location', HomeController]

  function HomeController($log, $rootScope, $window, galleryService, authService, $location) {
  this.$onInit = () => {
    $log.log('HomeController()');
    if(!$window.localStorage.token) {
          authService.getToken()
          .then(
            () => $location.url('/home'),
            () => $location.url('/signup')
          )
        }
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
