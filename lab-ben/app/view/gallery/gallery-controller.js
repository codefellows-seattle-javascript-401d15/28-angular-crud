'use strict';

module.exports = ['$log', function($log) {
  $log.debug('GalleryController');
  this.$onInit = () => {
    this.title = 'This is where the pictures go';
  };
}];
