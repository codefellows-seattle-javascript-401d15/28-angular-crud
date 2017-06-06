'use strict';

module.exports = {
  template: require('./get-gallery.html'),
  controllerAs: 'getGalleryCtrl',
  controller: ['$log', 'galleryService', function($log, galleryService) {
    this.$onInit = () => {
      $log.debug('Get Gallery Controller');
      this.galleries = [];

      this.getGalleries = () => {
        return galleryService.fetchGalleries()
        .then(() => {
          let res = this.galleries;
          return res;
        })
        .catch(err => $log.error(err));
      };
    };
  }],
};
