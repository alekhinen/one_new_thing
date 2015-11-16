angular.module('starter.suggestions', ['ionic', 'ionic.contrib.ui.tinderCards', 'starter.suggestions-factory'])

.controller('SuggestionsCtrl', function($scope, SuggestionsFactory) {
  $scope.suggestions = SuggestionsFactory.getFilteredSuggestions();

  $scope.cardDestroyed = function(index) {
    $scope.suggestions.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    // var newCard = // new card data
    // $scope.suggestions.push(newCard);
  };

  $scope.goToSuggestion = function(buttonId) {
    $(buttonId).addClass('button-going');
    $(buttonId).html('<span class="ion-checkmark"></span> Going');
  };

  $scope.range = function(length) {
    return new Array(length);
  };

  $scope.$on('applyFilters', function() {
    $scope.suggestions = SuggestionsFactory.getFilteredSuggestions();
  });

});
