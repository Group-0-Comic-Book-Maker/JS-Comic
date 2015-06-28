;(function () {

  'use strict';

  angular.module('app')

  .controller('singleUser', ['$scope', 'ENDPOINT', '$http', 'SingleUserService', '$routeParams',


    function ($scope, ENDPOINT, $http, SingleUserService, $routeParams) {


    $scope.photoList = [];


    $http.get(ENDPOINT.URL + '/photos/users', ENDPOINT.CONFIG)
        .success(function(data){

          $scope.photoList = _.map(data, function(d){

            return (d.photo_info);
          });

          console.log($scope.photoList)
        })


    var counter = 0;

    $scope.addToCanvas = function(url) {

      console.log(url);

        $('canvas').drawImage({
          draggable: true,
          source: url,
          width: 297,
          height: 527,
          x: 200 + counter, y: 300,
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
        window.location.reload();
      }

    }]);
}());


