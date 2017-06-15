'use strict';

const expect = require('chai').expect;

describe('Gallery Item Controller', function() {

  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $window, $httpBackend, $componentController, galleryService) => {
      this.$rootScope = $rootScope;
      this.$window = $window;
      this.$httpBackend = $httpBackend;
      this.$componentController = $componentController;
      this.galleryService = galleryService;
    });

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

    this.galleryItemCtrl = this.$componentController(
      'galleryItem',
      {
        scope: this.scope,
        picService: this.picService,
      },
      this.mockBindings
    );

    this.galleryItemCtrl.$onInit();
    done();
  });

  afterEach(done => {
    delete this.galleryItemCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default properties', () => {

    it('should have a showEditGallery property', done => {
      expect(this.galleryItemCtrl).to.have.a.property('showEditGallery');
      expect(this.galleryItemCtrl.showEditGallery).to.be.false;
      done();
    });

    it('should have a #deletGallery method', done => {
      expect(this.galleryItemCtrl.deleteGallery).to.be.instanceOf(Function);
      done();
    });

  });

  describe('Functional methods', () => {

    beforeEach(done => {
      this.expectUrl = 'http://localhost:3000/api/gallery/1234',
      this.expectHeaders = {
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.$window.localStorage.token}`,
      },
      done();
    });

    afterEach(done => {
      this.$httpBackend.flush();
      this.$rootScope.$apply();
      done();
    });

    describe('#deleteGallery', () => {
      it('should delete the gallery', done => {
        this.$httpBackend.expectDELETE(this.expectUrl, this.expectHeaders)
          .respond(204);

        this.galleryItemCtrl.deleteGallery();
        done();
      });
    });

  });

});
