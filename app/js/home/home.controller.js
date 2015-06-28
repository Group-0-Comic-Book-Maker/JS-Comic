;(function (){

  'use strict';

  angular.module('app')
  .controller('Home',  ['$scope', 'HomeService', '$http', '$location', 'ENDPOINT',
    function($scope, HomeService, $http, $location, ENDPOINT){

      $scope.photoList = [];

      $http.get(ENDPOINT.URL + '/photos/users', ENDPOINT.CONFIG)
        .success(function(data){

          $scope.photoList = _.map(data, function(d){

            return (d.photo_info);
          });

          console.log($scope.photoList)
        })



      $scope.logout = function() {

        Cookies.expire('id');
        Cookies.expire('access_token');
        Cookies.expire('username');

        $location.path('/login');

      };

    }]);

}());
