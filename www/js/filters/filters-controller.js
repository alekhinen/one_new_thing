angular.module('starter.filters', [])

.controller('FilterCtrl', function($scope, $stateParams) {

	// START: Five star rating thang
	// Initialization code
	var fiveStarClicked = false;
	var fourStarClicked = false;
	var threeStarClicked = false;
	var twoStarClicked = false;
	var oneStarClicked = false;

	var starClickList = [oneStarClicked, twoStarClicked, threeStarClicked, fourStarClicked, fiveStarClicked];

	var fiveStarElement = document.getElementById("fiveStarFilter");
	var fourStarElement = document.getElementById("fourStarFilter");
	var threeStarElement = document.getElementById("threeStarFilter");
	var twoStarElement = document.getElementById("twoStarFilter");
	var oneStarElement = document.getElementById("oneStarFilter");

	var starElementList = [oneStarElement, twoStarElement, threeStarElement, fourStarElement, fiveStarElement];

	
	// Handle
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

	// TODO: UNTESTED
	$scope.toggleStar = function(starClicked, state) {

		starClickList[starClicked] = state;
		var starElement = starElementList[starClicked];

		if (state) {
			starElement.classList.add('button-positive');
			starElement.classList.remove('button-dark');
			starElement.classList.add('ion-star');
			starElement.classList.remove('ion-ios-star-outline');
		}
		else {
			starElement.classList.remove('button-positive');
			starElement.classList.add('button-dark');
			starElement.classList.remove('ion-star');
			starElement.classList.add('ion-ios-star-outline');
		}
	}
	// END: Five star rating thang

	// START: Budget selection
	// Initialization code
	var freeClicked = false;
	var oneDollarClicked = false;
	var twoDollarClicked = false;
	var threeDollarClicked = false;

	var freeElement = document.getElementById("freeFilter");
	var oneDollarElement = document.getElementById("oneDollarFilter");
	var twoDollarElement = document.getElementById("twoDollarFilter");
	var threeDollarElement = document.getElementById("threeDollarFilter");

	// String --> Object hashtable
	// Key: Id of object (String)
	// Value: Object with given Id (Object)
	var elementTable = new Object(); // or just {}
	elementTable["freeFilter"] = freeElement;
	elementTable["oneDollarFilter"] = oneDollarElement;
	elementTable["twoDollarFilter"] = twoDollarElement;
	elementTable["threeDollarFilter"] = threeDollarElement;

	// String --> Boolean hashtable
	// Key: Id of object with stored state (String)
	// Value: State of object with given Id (Boolean)
	var stateTable = new Object();
	stateTable["freeFilter"] = freeClicked;
	stateTable["oneDollarFilter"] = oneDollarClicked;
	stateTable["twoDollarFilter"] = twoDollarClicked;
	stateTable["threeDollarFilter"] = threeDollarClicked;

	// Toggle the button found in the given event
	$scope.toggleButton = function($event) {
		var targetId = $event.target.id;

		stateTable[targetId] = !stateTable[targetId];

		if (stateTable[targetId]) {
			elementTable[targetId].classList.add('button-positive');
			elementTable[targetId].classList.remove('button-dark');
		}
		else {
			elementTable[targetId].classList.remove('button-positive');
			elementTable[targetId].classList.add('button-dark');
		}
	}

});


