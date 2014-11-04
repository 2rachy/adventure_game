// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.help', {
      url: "/help",
      views: {
        'menuContent' :{
          templateUrl: "templates/help.html"
        }
      }
    })

    .state('app.game_onebutton', {
      url: "/game_onebutton",
      views: {
        'menuContent' :{
          templateUrl: "templates/game_onebutton.html"
        }
      }
    })
      .state('app.game_twobutton', {
          url: "/game_twobutton",
          views: {
              'menuContent' :{
                  templateUrl: "templates/game_twobutton.html"
              }
          }
      })
      .state('app.game_threebutton', {
          url: "/game_threebutton",
          views: {
              'menuContent' :{
                  templateUrl: "templates/game_threebutton.html"
              }
          }
      })
      .state('app.game_fourbutton', {
          url: "/game_fourbutton",
          views: {
              'menuContent' :{
                  templateUrl: "templates/game_fourbutton.html"
              }
          }
      })
      .state('app.game_youlose', {
          url: "/game_youlose",
          views: {
              'menuContent' :{
                  templateUrl: "templates/game_youlose.html"
              }
          }
      })
      .state('app.game_youwin', {
          url: "/game_youwin",
          views: {
              'menuContent' :{
                  templateUrl: "templates/game_youwin.html"
              }
          }
      })
    .state('app.buttondoom', {
      url: "/buttondoom",
      views: {
        'menuContent' :{
          templateUrl: "templates/buttondoom.html"
        }
      }
    })

    .state('app.exit', {
      url: "/exit",
      views: {
        'menuContent' :{
          templateUrl: "templates/exit.html"
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/game_onebutton');
});

