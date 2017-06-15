'use strict';

const expect = require('chai').expect;

describe('Thumbnail Container Component', function() {

  beforeEach(done => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.thumbnailContainerCtrl = this.$componentController('thumbnailContainer');
      this.thumbnailContainerCtrl.$onInit();
    });
    done();
  });

  afterEach(done => {
    delete this.createGalleryCtrl;
    done();
  });

  it('should have a title', done => {
    expect(this.thumbnailContainerCtrl.title).to.equal('Pictures');
    done();
  });

});
