;(function (){

  'use strict';

  angular.module('app', ['ngRoute'])

  .config(['$routeProvider',
    function($routeProvider){

      $routeProvider.when('/', {
        controller:   'Home',
        templateUrl:  'js/home/home.tpl.html'
      });

   }]);

}());
