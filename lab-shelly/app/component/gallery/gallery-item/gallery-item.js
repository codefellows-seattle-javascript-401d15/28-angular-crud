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

      this.deleteGallery = () => {
        $log.debug('#galleryItemCtrl.deleteGallery');
        galleryService.deleteGallery(this.gallery._id);
      };
    };

  }],
};
