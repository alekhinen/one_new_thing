angular.module('starter.review', [])

.controller('ReviewCtrl', function($scope, $stateParams) {

  $scope.range = function(length) {
    return new Array(length);
  };

});
