angular.module('starter.reviews', ['ionic'])

.controller('ReviewsCtrl', function($scope) {
  $scope.reviews = [
    {
      id: 1,
      reviewer: 'Ariel W.',
      rating: 5,
      review: 'Such a sweet place. So much fun. Lol idk this is a thing.',
      timestamp: '10/10/2015'
    },
    {
      id: 2,
      reviewer: 'Tim B.',
      rating: 3,
      review: 'I really enjoyed the calmponents of the atmosphere, but it didn\'t tickle my fancy',
      timestamp: '10/1/2015'
    }
  ];

  $scope.range = function(length) {
    return new Array(length);
  };

});
