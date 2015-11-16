angular.module('starter.suggestion', ['ionic', 'starter.suggestions-factory'])

.controller('SuggestionCtrl', function($scope, $stateParams, SuggestionsFactory) {
  $scope.suggestion = SuggestionsFactory.getSuggestion($stateParams.suggestionId);

  $scope.range = function(length) {
    return new Array(length);
  }

});
