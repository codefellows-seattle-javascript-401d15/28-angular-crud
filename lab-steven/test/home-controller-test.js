'use strict';

const angular = require('angular');
require('angular-mocks');

describe('home controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      console.log('******************************************************');
      this.$rootScope = $rootScope;
      this.homeCtrl = new $controller('HomeController');
      // this.homeCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  describe('controller initial values', () => {
    it('has proper initial title value', () => {
      expect(this.homeCtrl.title).toEqual('Home Title');
    });
  });
});
