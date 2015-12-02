angular.module('starter.history', ['starter.history-factory'])

.controller('HistoryCtrl', function($scope, $stateParams, HistoryFactory) {
  $scope.showReviewPopup = false;
  $scope.showReviewError = false;
  $scope.selectedHistory = -1;

  $scope.histories = HistoryFactory.getHistory();

  $scope.range = function(length) {
    return new Array(length);
  };

  $scope.reviewSuggestion = function(historyId) {
    $scope.showReviewPopup = true;
    $scope.selectedHistory = historyId;
  };

  $scope.submitReview = function(newReview) {
    if (newReview.userRating) {
      HistoryFactory.addReviewToHistory($scope.selectedHistory, newReview);
      $scope.showReviewPopup = false;
    } else {
      $scope.showReviewError = true;
    }
  };

  $scope.closeReviewPopup = function() {
    $scope.showReviewPopup = false;
    $scope.showReviewError = false;
  };

});
