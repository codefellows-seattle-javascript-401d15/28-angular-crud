'use strict';

const expect = require('chai').expect;

describe('navbar component', function() {

  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($location, $window, $rootScope, $httpBackend, $componentController, authService) => {
      this.$location = $location;
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componentController;
      this.authService = authService;

      this.$window.localStorage.token = 'test token';
      this.scope = this.$rootScope.$new();

      this.navbarCtrl = this.$componentController('navbar');
      this.navbarCtrl.$onInit();
    });
    done();
  });

  afterEach(done => {
    delete this.navbarCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default properties', () => {
    it('should have checkPath method', done => {
      expect(this.navbarCtrl.checkPath).to.be.instanceOf(Function);
      this.$rootScope.$apply();
      done();
    });
    it('should have a logout method', done => {
      expect(this.navbarCtrl.logout).to.be.instanceOf(Function);
      this.$rootScope.$apply();
      done();
    });
    it('should have hideButtons set to false', done => {
      this.$location.path('/login');
      expect(this.navbarCtrl.hideButtons).to.equal(false);
      this.$rootScope.$apply();
      done();
    });
  });

});
