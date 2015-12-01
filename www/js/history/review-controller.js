angular.module('starter.review', [])

.controller('ReviewCtrl', function($scope, $stateParams) {

	$scope.newReview = {};

// START: Five star rating thang
	// Initialization code
	var fiveStarElement = document.getElementById("fiveStarRating");
	var fourStarElement = document.getElementById("fourStarRating");
	var threeStarElement = document.getElementById("threeStarRating");
	var twoStarElement = document.getElementById("twoStarRating");
	var oneStarElement = document.getElementById("oneStarRating");

	oneStarElement.classList.add('button-positive');
	oneStarElement.classList.remove('button-dark');
	oneStarElement.classList.add('ion-star');
	oneStarElement.classList.remove('ion-ios-star-outline');

	var starElementList = [oneStarElement, twoStarElement, threeStarElement, fourStarElement, fiveStarElement];

	// Handle
	$scope.reviewRatingClick = function(starValue) {
		starIndex = starValue - 1;
		
		for (i = 0; i <= starIndex; i++) {
			starElementList[i].classList.add('button-positive');
			starElementList[i].classList.remove('button-dark');
			starElementList[i].classList.add('ion-star');
			starElementList[i].classList.remove('ion-ios-star-outline');
		}

		for (i = starIndex + 1; i < starElementList.length; i++) {
			starElementList[i].classList.remove('button-positive');
			starElementList[i].classList.add('button-dark');
			starElementList[i].classList.remove('ion-star');
			starElementList[i].classList.add('ion-ios-star-outline');
		}

		$scope.setStar(starValue);
	}

  $scope.range = function(length) {
    return new Array(length);
  };

  $scope.setStar = function(starNumber) {
  	$scope.newReview.userRating = parseInt(starNumber);
  };

});
