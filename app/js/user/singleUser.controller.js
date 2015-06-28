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
          // draggable: true,
          source: 'http://lorempixel.com/300/400/',
          width: 300,
          height: 400,
          x: 170 + counter, y: 250,
          crossOrigin: 'anonymous',

        });
          counter += 350,
          console.log(counter)
      };

      $scope.save = function () {
          $('canvas').saveCanvas();
          var image = $('canvas').getCanvasImage('png');
          var a = $("<a>").attr("href", image).attr("download", "img.png").appendTo("body");
          a[0].click();
          a.remove();
        };

      $scope.reset = function() {
        SingleUserService.resetCanvas();
        counter = 0;
      }

    }]);
}());


