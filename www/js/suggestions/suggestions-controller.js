angular.module('starter.suggestions', ['ionic', 'ionic.contrib.ui.tinderCards', 'starter.suggestions-factory'])

.controller('SuggestionsCtrl', function($scope, SuggestionsFactory) {
  // the suggestions array.
  $scope.suggestions = SuggestionsFactory.getFilteredSuggestions();
  // are any filters applied?
  $scope.filterApplied = false;

  $scope.cardDestroyed = function(index) {
    $scope.suggestions.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    // var newCard = // new card data
    // $scope.suggestions.push(newCard);
  };

  $scope.goToSuggestion = function(suggestionId) {
    var buttonId = "#going-" + suggestionId
    $(buttonId).addClass('button-going');
    $(buttonId).html('<span class="ion-checkmark"></span> Going');
    SuggestionsFactory.setAsGoing(suggestionId);
  };

  $scope.range = function(length) {
    return new Array(length);
  };

  $scope.$on('applyFilters', function() {
    $scope.suggestions = SuggestionsFactory.getFilteredSuggestions();
    $scope.filterApplied = true;
  });

  /**
   * hasCards()
   * @description: Does this controller have cards?
   * @returns Boolean Whether or not this controller has suggestions
   */
  $scope.hasCards = function() {
    return $scope.suggestions.length != 0;
  };

  /**
   * resetSuggestions()
   * @description: Gets all filtered suggestions and sets it to this array.
   * @returns none
   */
  $scope.resetSuggestions = function() {
    $scope.suggestions = SuggestionsFactory.getFilteredSuggestions();
  };

});
