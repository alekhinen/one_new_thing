angular.module('starter.reviews', ['ionic'])

.controller('ReviewsCtrl', function($scope) {
  $scope.reviews = [
    {
      id: 1,
      reviewer: 'Ariel W.',
      rating: 5,
      review: 'Such a sweet place. So much fun. Lol idk this is a thing.',
      timestamp: '10/10/2015'
    }
  ];
});
