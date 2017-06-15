'use strict';

const expect = require('chai').expect;

describe('Create Gallery Component', function() {
  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController, galleryService) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.$componentController = $componentController;
      this.galleryService = galleryService;

      this.$window.localStorage.token = 'test token';
      this.scope = this.$rootScope.$new();

      this.createGalleryCtrl = this.$componentController('createGallery');
      this.createGalleryCtrl.$onInit();
      done();
    });
  });

  afterEach(done => {
    delete this.createGalleryCtrl;
    delete this.$window.localStorage.token;
    done();
  });


  describe('Default properties', () => {
    it('should have a gallery property', done => {
      expect(this.createGalleryCtrl).to.have.property('gallery');
      expect(this.createGalleryCtrl.gallery).to.be.an.instanceOf(Object);
      expect(this.createGalleryCtrl.gallery).to.be.empty;
      this.$rootScope.$apply();
      done();
    });
  });

  describe('Functional methods', () => {

    describe('#createGalleryCtrl', () => {

      it('should make a valid POST request for galleries', done => {

        let expectUrl = 'http://localhost:3000/api/gallery';
        let expectHeaders = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.$window.localStorage.token}`,
        };
        let expectGallery = {
          name: 'gallery one',
          desc: 'description one',
        };

        this.$httpBackend.expectPOST(expectUrl, expectGallery, expectHeaders)
        .respond(200, this.expectGallery);
        this.createGalleryCtrl.gallery = expectGallery;
        expect(this.createGalleryCtrl.createGallery).to.not.throw();
        this.$httpBackend.flush();
        this.$rootScope.$apply();
        done();
      });

    });

  });
});
