'use strict';

require('./_gallery-item.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<',
  },
  controller: ['$log', '$rootScope', 'galleryService', function($log, $rootScope, galleryService) {
    this.$onInit = () => {

      $log.debug('Gallery Item Controller');

      this.showEditGallery = false;

      this.makeCurrentGallery = () => {
        $log.log('run the thing!');
        $rootScope.$emit('updateCurrentGallery', this.gallery._id);
      }

      this.deleteGallery = () => {

        galleryService.deleteGallery(this.gallery._id)
        .then(
          () => $log.log('gallery deleted'),
          err => $log.error(err)
        );
      };
    };

  }],
};
