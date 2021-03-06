// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova', 'myControllers', 'ngResource', 'ng-token-auth']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('auth:login-success', function() {
      $location.path('/');
    });
}]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('welcome', {
    url: '/',
    templateUrl: 'templates/welcome.html',
    controller: 'WelcomeCtrl'
  })
  .state('attendees', {
    url: '/attendees',
    templateUrl: 'templates/attendees.html',
    controller: 'AttendeesCtrl',
    resolve: {
      auth: ['$auth', function($auth) {
        return $auth.validateUser();
      }]
    }
  })
  .state('signin', {
    url: '/sign_in',
    templateUrl: 'templates/user_sessions/new.html',
    controller: 'UserSessionsCtrl'
  });

  //Catch-all route
  $urlRouterProvider.otherwise('/');
});
