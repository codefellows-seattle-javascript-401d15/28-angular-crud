'use strict';

module.exports = function() {

  return function(galleries, searchFor){

    if(!searchFor) return galleries;
    let searchStr = `.*${searchFor.toUpperCase().split('').join('.*')}.*`;
    let regEx = new RegExp(searchStr);

    return galleries.filter(gallery => {
      return regEx.test(gallery.name.toUpperCase());
    });

  };
};
