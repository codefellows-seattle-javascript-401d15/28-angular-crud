'use strict';

const expect = require('chai').expect;

describe('Edit Gallery Component', function() {

  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $httpBackend, $window, $componentController, galleryService) => {
      this.$rootScope = $rootScope;
      this.$httpBackend = $httpBackend;
      this.$window = $window;
      this.$componentController = $componentController;
      this.galleryService = galleryService;

      this.$window.localStorage.token = 'test token';
      done();
    });
  });

  afterEach(done => {
    delete this.editGalleryCtrl;
    delete this.$window.localStorage.token;
    done();
  });

  describe('Default properties', () => {

    beforeEach(done => {
      this.mockBindings = {
        gallery: {
          name: 'galleryOne',
          desc: 'galleryOne',
          pics: [],
          _id: '1234',
        },
      };

      this.scope = this.$rootScope.$new();
      this.editGalleryCtrl = this.$componentController('editGallery', null, this.mockBindings);
      this.editGalleryCtrl.$onInit();
      done();
    });

    it('should have an edit gallery method', done => {
      expect(this.editGalleryCtrl.updateGallery).to.be.an.instanceOf(Function);
      this.$rootScope.$apply();
      done();
    });

    it('should have the proper mock bindings', done => {
      expect(this.editGalleryCtrl.gallery.name).to.equal(this.mockBindings.gallery.name);
      expect(this.editGalleryCtrl.gallery.desc).to.equal(this.mockBindings.gallery.desc);
      this.$rootScope.$apply();
      done();
    });
  });

  describe('Functional methods', () => {

    describe('#editGalleryCtrl.updateGallery', () => {

      it('should make a valid PUT request', done => {
        let expectUrl = 'http://localhost:3000/api/gallery/1234';
        let expectHeaders = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.$window.localStorage.token}`,
        };

        let mockBindings = {
          gallery: {
            name: 'update name',
            desc: 'update desc',
            // pics: [],
            _id: '1234',
          },
        };

        let mockUpdateGallery = {
          name: 'update name',
          desc: 'update desc',
          _id: '1234',
        };

        this.editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
        this.$httpBackend.expectPUT(expectUrl, mockUpdateGallery, expectHeaders)
          .respond(200);
        this.$httpBackend.whenPUT(expectUrl, mockUpdateGallery, expectHeaders)
          .respond(200, mockUpdateGallery);
        this.editGalleryCtrl.$onInit();
        this.editGalleryCtrl.updateGallery();
        expect(this.editGalleryCtrl.updateGallery).to.not.throw();
        expect(this.editGalleryCtrl.gallery.name).to.equal('update name');
        expect(this.editGalleryCtrl.gallery.desc).to.equal('update desc');
        this.$httpBackend.flush();
        this.$rootScope.$apply();
        done();
      });


    });

  });

});
