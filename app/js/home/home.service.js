;(function (){

  'use strict';

  angular.module('app')

  .service('HomeService', ['$http', 'ENDPOINT',
    function($http, ENDPOINT){

      this.getPhotos = function() {
        $http.post(ENDPOINT.URL + 'photos/users', ENDPOINT.CONFIG)
      }

    }]);

}());