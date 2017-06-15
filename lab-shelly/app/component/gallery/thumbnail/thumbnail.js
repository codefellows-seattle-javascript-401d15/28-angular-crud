'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<',
  },
  controller: [
    '$log', 'picService', function($log, picService) {

      this.$onInit = () => {
        $log.debug('thumbnailController');

        this.deletePic = () => {
          picService.deletePic(this.gallery, this.pic._id)
          .then(
            () => $log.log('pic deleted'),
            err => $log.error(err)
          );
        };
      };
    },
  ],
};
