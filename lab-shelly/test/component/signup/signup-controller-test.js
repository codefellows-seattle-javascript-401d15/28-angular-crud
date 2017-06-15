'use strict';

const expect = require('chai').expect;

describe('Signup Component', function() {

  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.signupCtrl = $componentController('signup');
      done();
    });
  });

  afterEach(done => {
    this.$window.localStorage.removeItem('token');
    this.$httpBackend.flush();
    this.$rootScope.$apply();
    done();
  });

  it('should send data to the server', done => {

    let expectUrl = 'http://localhost:3000/api/signup';
    let expectBody = {
      username: 'testingusername',
      password: 'password123',
      email: 'testemail@email.com',
    };

    let expectHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
//make the request
    this.signupCtrl.user = {
      username: 'testingusername',
      password: 'password123',
      email: 'testemail@email.com',
    };

    this.signupCtrl.$onInit();
    this.$httpBackend.expectPOST(expectUrl, expectBody, expectHeaders)
    .respond(200, 'exampletoken1234');
    let runTheThing = () => {
      this.signupCtrl.signup(this.signupCtrl.user);
    };

    expect(runTheThing).to.not.throw();
    done();
  });
});
