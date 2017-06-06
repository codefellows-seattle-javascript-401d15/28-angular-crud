'use strict';

const expect = require('chai').expect;

describe('Create gallery component', function() {
  beforeEach(() => { /* eslint-disable */
    angular.mock.module('cfgram'); 
    angular.mock.inject(($httpBackend, $window, $rootScope, $componentController) => { 
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.$rootScope = $rootScope;
      // every time a component is tested, create a mock component using $componentController
      this.createGalleryCtrl = $componentController(createGalleryCtrl);
      done();   // if using mocha
    }) 
  })
  
  // now we can access $window
  // this needs to also be beforeEach, because if it were just 'before' it would run before the beforeEach block above
  beforeEach(() => {
    this.createGalleryCtrl.$onInit();
    this.$window.localStorage.setItem('token', 'test token');
  })
  
  afterEach(() => {
    this.$window.localStorage.removeItem('token');
    this.$httpBackend.flush();
    this.$rootScope.$apply();
    done();
  })
  
  describe('testing createGalleryCtrl.createGallery()', () => {
    it('should make a valid POST request for all galleries', done => {
      let expectUrl = 'http://localhost:3000/api/gallery';
      let expectHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`
      }
      let expectGallery = {
        name: 'gallery one',
        desc: 'description one'
      }
      
      // $httpBackend acts as mock server
      // .respond to mock up response from server
      this.$httpBackend.expectPOST(expectUrl, expectGallery, expectHeaders)
        .respond(200, expectGallery);
        
      this.createGalleryCtrl.gallery = expectGallery;
      
      // when a method is passed in and used with "to not throw", expect calls the function and tells you if it throws an error, so this test confirms that an error was not thrown
      expect(this.createGalleryCtrl.createGallery).to.not.throw();
      
      
      done();
    });
  })
  
});