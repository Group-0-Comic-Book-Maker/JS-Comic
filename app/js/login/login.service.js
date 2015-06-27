;(function (){

  'use strict';

  angular.module('app')

  .service('LoginService', [
    function(){

      this.login = function() {
        console.log('LOGIN PAGE');
      };

    }]);

}());