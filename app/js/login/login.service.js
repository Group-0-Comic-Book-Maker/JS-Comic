;(function (){

  'use strict';

  angular.module('app')

  .service('LoginService', ['$http', '$rootScope', 'ENDPOINT',
    function($http, $rootScope, ENDPOINT){

      var User = function(options) {
        this.username = options.username;
        this.password = options.password;
      };

      this.addUser = function(u) {
        var x = new User(u);

        $http.post(ENDPOINT.URL + 'users/', x, ENDPOINT.CONFIG)

      };

      this.loginUser = function(u) {
        var x = new User(u);

        $http.get(ENDPOINT.URL + 'login/', ENDPOINT.CONFIG)

      }

    }]);

}());