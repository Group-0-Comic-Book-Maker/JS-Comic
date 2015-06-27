;(function () {

  'use strict';

  angular.module('app')

  .controller('singleUser', ['$scope', 'SingleUserService', '$routeParams',


    function ($scope, SingleUserService, $routeParams) {

      console.log('user page');

      var id = $routeParams.id;

      // SingleUserService.getUser(id).success( function (data) {
      //   $scope.user = data;
      // });

    var counter = 0;

    $scope.addToCanvas = function() {


        $('canvas').drawImage({
          layer: true,
          draggable: true,
          bringToFront: true,
          source: 'http://lorempixel.com/300/400/',
          width: 300,
          height: 400,
          x: 250 + counter, y: 250,
          crossOrigin: 'anonymous',

        });
          counter += 350,
          console.log(counter)
      };


    }
    ]);
}());
