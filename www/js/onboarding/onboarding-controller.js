angular.module('starter.onboarding', [])

.controller('OnboardingCtrl', function($scope, $state) {

  $scope.endSlideShow = function() {
     window.localStorage['isOnboarding'] = 'no';
     $state.go('app.suggestions');
   }

});
