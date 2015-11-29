// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
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
})

.config( function( $stateProvider, $urlRouterProvider )
{
  // List templates here
  $stateProvider
    .state( 'found', {
      url: "/found",
      templateUrl: 'www/templates/home/home.html',
      controllerName: 'homeController'
    })

    .state( 'lost', {
      url: "/lost",
      templateUrl: 'www/templates/home/lost.html',
      controllerName: 'homeController'
    })

    .state( 'addItem' , {
      url: "/addItem",
      views: {
        'addItem': {
          templateUrl: 'www/templates/addItemform/addItemform.html',
          controllerName: 'addItemController'
        }
      }
    })

    .state( 'search' , {
      url: "/search",
      templateUrl: 'www/templates/search/search.html',
      controllerName: 'searchController'
    })


    .state( 'leftMenu', {
      url: "/leftMenu",
      abstract: true,
      templateUrl: 'www/templates/leftMenu/leftMenu.html'
    })

    .state( 'leftMenu.profile', {
      url: "/profile",
      views: {
        'left-profile': {
          templateUrl: 'www/templates/leftMenu/profile.html'
        }
      }
    })

    .state( 'foundItems',  {
      url: "/found/:itemId",
      templateUrl: 'www/templates/details/foundDetails.html',
      controllerName: 'detailsController'
    })

    .state( 'lostItems',  {
      url: "/lost/:itemId",
      templateUrl: 'www/templates/details/lostDetails.html',
      controllerName: 'detailsController'
    });


  $urlRouterProvider.otherwise( '/found' );

});