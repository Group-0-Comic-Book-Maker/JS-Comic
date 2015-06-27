;(function (){

  'use strict';

  angular.module('app', ['ngRoute'])

  .config(['$routeProvider',
    function($routeProvider){

      $routeProvider.when('/', {
        controller:   'Home',
        templateUrl:  'js/home/home.tpl.html'
      })

      .when('/login', {
        controller:   'Login',
        templateUrl:  'js/login/login.tpl.html'
      })

      .when('/signup', {
        controller:   'Login',
        templateUrl:  'js/login/signup.tpl.html'
      });

   }]);

}());
