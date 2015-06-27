;(function (){

  'use strict';

  angular.module('app')
  .controller('Login',  [ "LoginService",
    function(LoginService){

      LoginService.login();

    }]);

}());