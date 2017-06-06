'use strict';

describe('home controller', function(){
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $httpBackend, $window, $controller) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.homeCtrl = new $controller('HomeController');
    });
  });

  beforeEach(() => {
    this.homeCtrl.$onInit();

  });
  afterEach(() => this.$rootScope.$apply());

  describe('controller initial values', () => {
    it('has proper initial title value', () => {
      expect(this.homeCtrl.title).toEqual('Home Title');
    });
  });
});
