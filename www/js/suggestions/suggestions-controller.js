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

  $scope.toggleGoToSuggestion = function(suggestionId) {
    var buttonId = "#going-" + suggestionId;
    if ($(buttonId).val() == "false") {
      $scope.goToSuggestion(suggestionId, buttonId);
      $(buttonId).val("true");
    }
    else {
      $scope.doNotGoToSuggestion(suggestionId, buttonId);
      $(buttonId).val("false");
    } 
  };

  $scope.goToSuggestion = function(suggestionId, buttonId) {
    $(buttonId).addClass('button-going');
    $(buttonId).html('<span class="ion-checkmark"></span> Going');
    SuggestionsFactory.setAsGoing(suggestionId);
  };

  $scope.doNotGoToSuggestion = function(suggestionId, buttonId) {
    $(buttonId).removeClass('button-going');
    $(buttonId).html('I&apos;m Going');
    SuggestionsFactory.setAsNotGoing(suggestionId);
  };

  $scope.range = function(length) {
    return new Array(length);
  };

  $scope.$on('applyFilters', function() {
    $scope.suggestions = SuggestionsFactory.getFilteredSuggestions();
  });

  /**
   * hasCards()
   * @description: Does this controller have cards?
   * @returns Boolean Whether or not this controller has suggestions
   */
  $scope.hasCards = function() {
    return $scope.suggestions.length != 0;
  }
});
