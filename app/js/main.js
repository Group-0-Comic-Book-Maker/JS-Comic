// angular.module('myApp', [])

// .controller('zero-issueCtrl', function($scope){
//   $scope.image = "images/zero-issue.png";


  .constant('ENDPOINT', {
    URL: 'https://evening-escarpment-7913.herokuapp.com',
    CONFIG: {
      headers: {
       'access_token': Cookies.get('access_token')
      }
    }
  })

  .config(['$routeProvider',
    function($routeProvider){

      $routeProvider.when('/', {
        controller:   'Home',
        templateUrl:  'js/home/home.tpl.html'
      })


      .when('/user/', {

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
// });

