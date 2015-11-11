angular.module('starter.suggestions', [])

.controller('SuggestionsCtrl', function($scope) {
  $scope.suggestions = [
    { title: 'Bickmore', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('SuggestionCtrl', function($scope, $stateParams) {
});