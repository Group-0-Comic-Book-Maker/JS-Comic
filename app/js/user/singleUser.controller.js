;(function () {

  'use strict';

  angular.module('app')

  .controller('singleUser', ['$scope', 'SingleUserService', '$routeParams',


  function ($scope, SingleUserService, $routeParams) {


    var id = $routeParams.id;
    SingleUserService.getUser(id).success( function (data) {

      $scope.user = data;

    });

  }



    ]);



}());




