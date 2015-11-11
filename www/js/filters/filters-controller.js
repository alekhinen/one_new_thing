angular.module('starter.filters', [])

.controller('FilterCtrl', function($scope, $stateParams) {

	var fiveClicked = false;
	var fourClicked = false;
	var threeClicked = false;
	var twoClicked = false;
	var oneClicked = false;

	var starClickList = [oneClicked, twoClicked, threeClicked, fourClicked, fiveClicked];

	var fiveStarElement = document.getElementById("fiveStarFilter");
	var fourStarElement = document.getElementById("fourStarFilter");
	var threeStarElement = document.getElementById("threeStarFilter");
	var twoStarElement = document.getElementById("twoStarFilter");
	var oneStarElement = document.getElementById("oneStarFilter");

	var starElementList = [oneStarElement, twoStarElement, threeStarElement, fourStarElement, fiveStarElement];

	$scope.ratingClick = function(starClicked) {
		starClickList[starClicked] = !starClickList[starClicked];

		if (starClickList[starClicked] == true) {
			for (i = starClicked; i >= 0; i--) {
				starElementList[i].classList.add('button-positive');
				starElementList[i].classList.remove('button-dark');
				starElementList[i].classList.add('ion-star');
				starElementList[i].classList.remove('ion-ios-star-outline');
			}
		}
		else {
			for (i = starClicked; i >= 0; i--) {
				starElementList[i].classList.remove('button-positive');
				starElementList[i].classList.add('button-dark');
				starElementList[i].classList.remove('ion-star');
				starElementList[i].classList.add('ion-ios-star-outline');
			}
		}
	}
});


