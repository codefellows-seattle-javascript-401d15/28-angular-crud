'use strict';

const expect = require('chai').expect;

describe('Signup Component', function() {

  angular.mock.module('cfgram');
  angular.mock.inject(($rootScope, $httpBackend, $window, $componentController, authService) => {
    this.$rootScope = $rootScope;
    this.$httpBackend = $httpBackend;
    this.$window = $window;
    this.loginCtrl = $componentController('login');
    this.authService = authService;

    let user = {
      username: 'testingusername',
      password: 'password123',
      email: 'testemail@email.com',
    };
    let base64 = this.$window.btoa(`${user.username}:${user.password}`);

    let expectUrl = 'http://localhost:3000/api/login';
    let expectHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Basic ${base64}`,
    };

    it('should send data to the server', done => {

      this.loginCtrl.$onInit();
      this.$httpBackend.expectPOST(expectUrl, expectHeaders)
      .respond(200);
      let runFunction = () => {
        this.loginCtrl.login();
      };
      expect(runFunction).to.not.throw();
      this.$httpBackend.flush();
      this.$rootScope.apply();
      done();
    });
  });
});
