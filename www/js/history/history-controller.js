angular.module('starter.history', [])

.controller('HistoryCtrl', function($scope, $stateParams) {
  $scope.histories = [
    {
      id: 1,
      suggestion: {
        id: 1,
        title: 'Symphony Sushi',
        photo: '/img/symphony_sush.jpg',
        location: {
          street: '45 Gainsborough St',
          city: 'Boston',
          state: 'MA',
          zip: 02115
        },
      },
      userRating: 4,
      userReview: 'This place is pretty good for the price',
      userTimestamp: '11/7/2015'
    },
    {
      id: 2,
      suggestion: {
        id: 2,
        title: 'Petey Pete\'s Pizza & Pasta',
        photo: '/img/petey_petes.jpg',
        rating: 1,
        location: {
          street: '123 Pete St',
          city: 'Cambridge',
          state: 'MA',
          zip: 02110
        },
      },
      userRating: false,
      userReview: false,
      userTimestamp: false
    }
  ];

  $scope.range = function(length) {
    return new Array(length);
  };
});
