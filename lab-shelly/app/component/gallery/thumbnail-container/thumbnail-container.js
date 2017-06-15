'use strict';

require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  controllerAs: 'thumbnailContainerCtrl',
  bindings: {
    gallery: '<',
  },
  controller: [
    '$log', function($log) {
      this.$onInit = () => {

        $log.debug('thumbnailContainerCtrl');
        this.title = 'Pictures';
        
      };
    },
  ],
};
