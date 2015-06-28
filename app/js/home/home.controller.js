;(function (){

  'use strict';

  angular.module('app')
  .controller('Home',  ['$scope', 'HomeService', '$http', '$location', 'ENDPOINT',
    function($scope, HomeService, $http, $location, ENDPOINT){

      $scope.photoList = [];

      $scope.getPhotos = function() {
        $http.post(ENDPOINT.URL + 'photos/users', ENDPOINT.CONFIG)
          .success(function(data){

            console.log(data); /// <----- WILL NEED RIGHT KEY

            $scope.photoList = data;
          })
      };


      $scope.logout = function() {

        Cookies.expire('id');
        Cookies.expire('access_token');
        Cookies.expire('username');

        $location.path('/login');

      };

    }]);

}());
