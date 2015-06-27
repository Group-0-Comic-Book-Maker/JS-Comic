;(function (){

  'use strict';

  angular.module('app')

  .service('LoginService', ['$http', 'ENDPOINT',
    function($http, ENDPOINT){

      var User = function(options) {
        this.username = options.username;
        this.password = options.password;
        this.email    = options.email;
      };

      this.addUser = function(u) {
        var user = new User(u);

        $http.post(ENDPOINT.URL + '/users/register', user, ENDPOINT.CONFIG)

      };

      this.loginUser = function(u) {
        var user = new User(u);

        $http.post(ENDPOINT.URL + '/users/login', user, ENDPOINT.CONFIG)

      }

    }]);

}());