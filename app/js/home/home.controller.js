;(function (){

  'use strict';

  angular.module('app')
  .controller('Home',  ['$scope', 'HomeService', '$http', '$location', 'ENDPOINT',
    function($scope, HomeService, $http, $location, ENDPOINT){

      $scope.photoList = [];

      HomeService.getPhotos()
        .success(function(data){
          console.log(data);

          $scope.photoList = data;

        })

    }]);

}());
