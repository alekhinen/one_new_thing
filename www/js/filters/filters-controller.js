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

	// Initialization code

	// Button States
	// Activity button states
	var restaurantClicked = false;
	var barClicked = false;
	var raveClicked = false;
	var museumClicked = false;
	var musicClicked = false;
	var button1Clicked = false;
	var button2Clicked = false;

	// Budget button states
	var freeClicked = false;
	var oneDollarClicked = false;
	var twoDollarClicked = false;
	var threeDollarClicked = false;

	// Party size selection states
	var partyOneClicked = false;
	var partyTwoClicked = false;
	var partyGroupClicked = false;

	// Button Elements
	// Activity button elements
	var restaurantElement = document.getElementById("restaurantFilter");
	var barElement = document.getElementById("barFilter");
	var raveElement = document.getElementById("raveFilter");
	var museumElement = document.getElementById("museumFilter");
	var musicElement = document.getElementById("musicFilter");
	var button1Element = document.getElementById("button1Filter");
	var button2Element = document.getElementById("button2Filter");

	// Budget button elements
	var freeElement = document.getElementById("freeFilter");
	var oneDollarElement = document.getElementById("oneDollarFilter");
	var twoDollarElement = document.getElementById("twoDollarFilter");
	var threeDollarElement = document.getElementById("threeDollarFilter");

	// Party size button elements
	var partyOneElement = document.getElementById("partyOne");
	var partyTwoElement = document.getElementById("partyTwo");
	var partyGroupElement = document.getElementById("partyGroup");

	// String --> Object hashtable
	// Key: Id of object (String)
	// Value: Object with given Id (Object)
	var elementTable = new Object(); // or just {}

	// Activity button element mapping
	elementTable["restaurantFilter"] = restaurantElement;
	elementTable["barFilter"] = barElement;
	elementTable["raveFilter"] = raveElement;
	elementTable["museumFilter"] = museumElement;
	elementTable["musicFilter"] = musicElement;
	elementTable["button1Filter"] = button1Element;
	elementTable["button2Filter"] = button2Element;

	// Budget button element mapping
	elementTable["freeFilter"] = freeElement;
	elementTable["oneDollarFilter"] = oneDollarElement;
	elementTable["twoDollarFilter"] = twoDollarElement;
	elementTable["threeDollarFilter"] = threeDollarElement;

	// Party size button element mapping
	elementTable["partyOne"] = partyOneElement;
	elementTable["partyTwo"] = partyTwoElement;
	elementTable["partyGroup"] = partyGroupElement;

	// String --> Boolean hashtable
	// Key: Id of object with stored state (String)
	// Value: State of object with given Id (Boolean)
	var stateTable = new Object();

	// Activity button state mapping
	stateTable["restaurantFilter"] = restaurantClicked;
	stateTable["barFilter"] = barClicked;
	stateTable["raveFilter"] = raveClicked;
	stateTable["museumFilter"] = museumClicked;
	stateTable["musicFilter"] = musicClicked;
	stateTable["button1Filter"] = button1Clicked;
	stateTable["button2Filter"] = button2Clicked;

	// Budget button state mapping
	stateTable["freeFilter"] = freeClicked;
	stateTable["oneDollarFilter"] = oneDollarClicked;
	stateTable["twoDollarFilter"] = twoDollarClicked;
	stateTable["threeDollarFilter"] = threeDollarClicked;

	// Party size button state mapping
	stateTable["partyOne"] = partyOneClicked;
	stateTable["partyTwo"] = partyTwoClicked;
	stateTable["partyGroup"] = partyGroupClicked;

	// Toggle the button with the given id
	$scope.toggleButton = function(elementId) {
		// Invert the state of the button
		stateTable[elementId] = !stateTable[elementId];

		// If the button is active
		if (stateTable[elementId]) {
			// Change it's style to show state (make blue, remove black)
			elementTable[elementId].classList.add('button-positive');
			elementTable[elementId].classList.remove('button-dark');
		}
		// If not
		else {
			// Change it's style to show state (make black, remove blue)
			elementTable[elementId].classList.remove('button-positive');
			elementTable[elementId].classList.add('button-dark');
		}
	}

	// Set the state of the button with the given id to the given boolean
	$scope.setButtonState = function(elementId, targetState) {
		// Set the state of the button to the input boolean
		stateTable[elementId] = targetState;

		// If the button is active
		if (targetState) {
			// Change it's style to show state (make blue, remove black)
			elementTable[elementId].classList.add('button-positive');
			elementTable[elementId].classList.remove('button-dark');
		}
		// If not
		else {
			// Change it's style to show state (make black, remove blue)
			elementTable[elementId].classList.remove('button-positive');
			elementTable[elementId].classList.add('button-dark');
		}
	}

	// Activate the target input and deactivate all other elements in the given button group.
	$scope.toggleButtonGroup = function(buttonGroupId, targetIndex) {
		// Get the buttons from the holder object
		var buttons = $('#' + buttonGroupId).children();
		// Find and store the target button
		var target = buttons[targetIndex];

		// Turn off all of the buttons in the group
		for (i = 0; i < buttons.length; i++) {
			$scope.setButtonState(buttons[i].id, false);
		}

		// Activate the target button
		$scope.setButtonState(target.id, true);
	}
});


