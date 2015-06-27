;(function (){

  'use strict';

  angular.module('app')
  .controller('Login',  [ '$scope', 'LoginService', '$http', '$location',
    function($scope, LoginService, $http, $location){

      $scope.loginUser = function(u){

        console.log(u);

        LoginService.loginUser(u)
          .success(function(data){
            console.log(data);
            Cookies.set('access_token', data.access_token, { expires: Infinity });
            Cookies.set('username', data.username, { expires: Infinity });

            window.location.href = '';
          })
           .error(function(data){
            console.log(data);
        });
       };

       $scope.addUser = function(u) {

        console.log(u)

        LoginService.addUser(u)
          .success(function(data){
          console.log(data);
          Cookies.set('access_token', data.access_token, { expires: Infinity });
          Cookies.set('username', data.username, { expires: Infinity });

          window.location.href = ''
        })
        .error(function(data){
          console.log(data);
        });
       };


    }]);

}());