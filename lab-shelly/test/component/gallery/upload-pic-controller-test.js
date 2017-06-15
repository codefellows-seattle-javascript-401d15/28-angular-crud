'use strict';

const expect = require('chai').expect;

describe('Upload Pic Component', function() {

  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController, picService, galleryService) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.$componentController = $componentController;
      this.picService = picService;
      this.galleryService = galleryService;
      this.mockBindings = {
        gallery: {
          name: 'galleryOne',
          desc: 'galleryOne',
          pics: [],
          _id: '1234',
        },
      };

      this.$window.localStorage.token = 'test token';
      this.scope = this.$rootScope.$new();
      this.uploadPicCtrl = this.$componentController('uploadPic',
        {
          scope: this.scope,
          galleryService: this.galleryService,
          picService: this.picService,
        },
        this.mockBindings
      );

      this.uploadPicCtrl.$onInit();
      done();
    });
  });

  afterEach(done => {
    delete this.uploadPicCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default properties', () => {
    it('should have a pic object', done => {
      expect(this.uploadPicCtrl.pic).to.be.instanceOf(Object);
      done();
    });
    it('should have a uploadPic method', done => {
      expect(this.uploadPicCtrl.uploadPic).to.be.instanceOf(Function);
      done();
    });
  });


  describe('Functional methods', () => {
    it('should make a valid POST request pictures', done => {
      let expectUrl = 'http://localhost:3000/api/gallery/1234/pic';
      let expectHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.$window.localStorage.token}`,
      };
      let expectPic = {
        name: 'pic one',
        desc: 'description one',
        file: 'a pic',
      };

      this.$httpBackend.expectPOST(expectUrl, expectPic, expectHeaders).respond(200);
      // this.$httpBackend.flush();
      // this.$rootScope.$apply();
      done();
    });

  });

});
