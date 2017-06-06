'use strict'

module.exports = [
  '$q',
  '$log',
  '$http',
  'authService',
  function($q, $log, $http, authService) {
    $log.debug('Gallery Service')

    let service = {}
    service.galleries = []

    service.createGallery = (gallery) => {
      
    }
  }
]
