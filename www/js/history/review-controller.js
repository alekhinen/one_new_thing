angular.module('starter.review', [])

.controller('ReviewCtrl', function($scope, $stateParams) {

  $scope.range = function(length) {
    return new Array(length);
  };

  $scope.setStar = function(starNumber) {
    console.log(starNumber);
    $('#review-star-amt').val(starNumber);
  };

});
