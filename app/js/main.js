;(function (){

  'use strict';

  angular.module('app', ['ngRoute'])

  .constant('ENDPOINT', {
    URL: 'https://',
    CONFIG: {
      headers: {
       'Auth-Token': Cookies.get('Auth-Token')
      }
    }
  })

  .config(['$routeProvider',
    function($routeProvider){

      $routeProvider.when('/', {
        controller:   'Home',
        templateUrl:  'js/home/home.tpl.html'
      })


      .when('/:id', {

        controller: 'singleUser',
        templateUrl: 'js/user/singleUser.tpl.html'
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
