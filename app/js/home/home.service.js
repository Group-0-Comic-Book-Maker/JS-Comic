;(function (){

  'use strict';

  angular.module('app')

  .service('HomeService', [
    function(){

      this.log = function() {
        console.log('hello');
      };

    }]);

}());