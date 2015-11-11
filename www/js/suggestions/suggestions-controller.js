angular.module('starter.suggestions', ['ionic', 'ionic.contrib.ui.tinderCards'])

.controller('SuggestionsCtrl', function($scope) {
  $scope.suggestions = [
    { title: 'Bickmore', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];

  $scope.cardDestroyed = function(index) {
    $scope.suggestions.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    // var newCard = // new card data
    // $scope.suggestions.push(newCard);
  };
})

.controller('SuggestionCtrl', function($scope, $stateParams) {
});