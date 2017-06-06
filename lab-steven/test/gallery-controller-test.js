'use strict';

const angular = require('angular');
require('angular-mocks');

describe('gallery controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.galleryCtrl = new $controller('GalleryController');
      // this.galleryCtrl.$onInit();

    });
  });
  afterEach(() => this.$rootScope.$apply());

  describe('controller initial values', () => {
    it('has proper initial title value', () => {
      expect(this.galleryCtrl.title).toEqual('Gallery Title');
    });
  });
});
