'use strict';

const expect = require('chai').expect;

describe('Landing controller', function() {

  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($location, $rootScope, $httpBackend, $controller) => {
      this.$rootScope = $rootScope;
      this.$httpBackEnd = $httpBackend;
      this.$location = $location.url('/join');
      this.landingCtrl = new $controller('LandingController');
      this.landingCtrl.$onInit();
    });
    done();
  });

  it('showSignup should be set to equal true', () => {
    expect(this.landingCtrl.showSignup).to.equal(true);
  });
  it('showSignup should be set to equal false', () => {
    this.$location.url('/login');
    this.landingCtrl.$onInit();
    expect(this.landingCtrl.showSignup).to.equal(false);
  });
});
