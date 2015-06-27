;(function (){

  'use strict';

  angular.module('app')
  .controller('Login',  [ '$scope', 'LoginService',
    function($scope, LoginService){

      $scope.loginUser = function(u){

        console.log(u);

        LoginService.loginUser(u)
          .success(function(data){
            Cookies.set('Auth-Token', data.Auth-Token, { expires: Infinity });
            Cookies.set('username', data.username, { expires: Infinity });

            window.location.href = '';
          })
           .error(function(data){

        });
       };

       $scope.addUser = function(u) {

        console.log(u)

        LoginService.addUser(u)
          .success(function(data){
          Cookies.set('Auth-Token', data.Auth-Token, { expires: Infinity });
          Cookies.set('username', data.username, { expires: Infinity });

          window.location.href = ''
        })
        .error(function(data){

        });
       };


    }]);

}());