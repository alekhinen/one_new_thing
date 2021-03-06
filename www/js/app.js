// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.history',
                            'starter.review', 'starter.suggestions', 'starter.suggestion',
                            'starter.reviews', 'starter.filters', 'starter.onboarding'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'FilterCtrl'
  })

  .state('app.onboarding', {
    url: '/onboarding',
    views: {
      'menuContent': {
        templateUrl: 'templates/onboarding.html',
        controller: 'OnboardingCtrl'
      }
    }
  })

  .state('app.history', {
    url: '/history',
    views: {
      'menuContent': {
        templateUrl: 'templates/history.html',
        controller: 'HistoryCtrl'
      }
    }
  })

  .state('app.reviews', {
    url: '/suggestions/:suggestionId/reviews',
    views: {
      'menuContent': {
        templateUrl: 'templates/reviews.html',
        controller: 'ReviewsCtrl'
      }
    }
  })

  .state('app.suggestions', {
    url: '/suggestions',
    views: {
      'menuContent': {
        templateUrl: 'templates/suggestions.html',
        controller: 'SuggestionsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/suggestions/:suggestionId',
    views: {
      'menuContent': {
        templateUrl: 'templates/suggestion.html',
        controller: 'SuggestionCtrl'
      }
    }
  });

  // if none of the above states are matched, use one of these as the fallback
  if (window.localStorage['isOnboarding'] != 'no') {
    $urlRouterProvider.otherwise('/app/onboarding');
  } else {
     $urlRouterProvider.otherwise('/app/suggestions');
  }
});
