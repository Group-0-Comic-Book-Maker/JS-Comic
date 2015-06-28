;(function () {

  'use strict';


  angular.module('app')

  .service('SingleUserService', ['$http', 'ENDPOINT', '$rootScope',

    function ($http, ENDPOINT, $rootScope) {


      var endpoint = //whatever the endpoint is.


      this.getCookies = function() {
        return $http.get()
      };

      this.getUser = function (id) {
        return $http.get(ENDPOINT.URL + 'users/', id, ENDPOINT.CONFIG);
      };


      this.getImages = function (imgId) {
        return $http.post(ENDPOINT.URL + 'photos/user', imgId , ENDPOINT.CONFIG);
      };





    }
   ]);
}());








