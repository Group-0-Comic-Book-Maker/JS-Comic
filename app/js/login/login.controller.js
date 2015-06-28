;(function (){

  'use strict';

  angular.module('app')
  .controller('Login',  [ '$scope', 'LoginService', '$http', '$location', 'ENDPOINT',
    function($scope, LoginService, $http, $location, ENDPOINT){

      $scope.loginUser = function(u) {
        var user = new User(u);

        console.log(user);

        $http.post(ENDPOINT.URL + '/users/login', user, ENDPOINT.CONFIG)
          .success(function(data){
            console.log(data.user);
          Cookies.set('access_token', data.user.access_token, { expires: Infinity });
          Cookies.set('username', data.user.username, { expires: Infinity });
          Cookies.set('id', data.user.id, { expires: Infinity });

          window.location.href = ''
        })
      };


      var User = function(options) {
        this.username = options.username;
        this.password = options.password;
        this.email    = options.email;
      };

      $scope.addUser = function(u) {
        var user = new User(u);

        console.log(user);

        $http.post(ENDPOINT.URL + '/users/register', user, ENDPOINT.CONFIG)
          .success(function(data){
            console.log(data.user);
          Cookies.set('access_token', data.user.access_token, { expires: Infinity });
          Cookies.set('username', data.user.username, { expires: Infinity });
          Cookies.set('id', data.user.id, { expires: Infinity });

          window.location.href = ''
        })

      };


    }]);

}());