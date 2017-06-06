'use strict';

const angular = require('angular');
require('angular-mocks');

describe('signup controller', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.signupCtrl = new $controller('SignupController');
      // this.signupCtrl.$onInit();
    });
  });
  afterEach(() => this.$rootScope.$apply());

  describe('controller initial values', () => {
    it('has proper initial title value', () => {
      expect(this.signupCtrl.title).toEqual('Signup Title');
    });
  });
});
