angular.module('starter.onboarding', [])

.controller('OnboardingCtrl', function($scope, $state) {

  $scope.endOnboarding = function() {
     window.localStorage['isOnboarding'] = 'no';
     $state.go('app.suggestions');
   };

});
