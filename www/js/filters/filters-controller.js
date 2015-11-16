angular.module('starter.filters', ['starter.filter-factory'])

.controller('FilterCtrl', function($scope, $stateParams, FilterFactory) {

	// START: Five star rating thang
	// Initialization code
	var fiveStarClicked = false;
	var fourStarClicked = false;
	var threeStarClicked = false;
	var twoStarClicked = false;
	var oneStarClicked = true;

	var starClickList = [oneStarClicked, twoStarClicked, threeStarClicked, fourStarClicked, fiveStarClicked];

	var fiveStarElement = document.getElementById("fiveStarFilter");
	var fourStarElement = document.getElementById("fourStarFilter");
	var threeStarElement = document.getElementById("threeStarFilter");
	var twoStarElement = document.getElementById("twoStarFilter");
	var oneStarElement = document.getElementById("oneStarFilter");

	oneStarElement.classList.add('button-positive');
	oneStarElement.classList.remove('button-dark');
	oneStarElement.classList.add('ion-star');
	oneStarElement.classList.remove('ion-ios-star-outline');

	var starElementList = [oneStarElement, twoStarElement, threeStarElement, fourStarElement, fiveStarElement];

	// Handle
	$scope.ratingClick = function(starIndex) {

		for (i = 0; i <= starIndex; i++) {
			starClickList[i] = true;
			starElementList[i].classList.add('button-positive');
			starElementList[i].classList.remove('button-dark');
			starElementList[i].classList.add('ion-star');
			starElementList[i].classList.remove('ion-ios-star-outline');
		}

		for (i = starIndex + 1; i < starElementList.length; i++) {
			starClickList[i] = false;
			starElementList[i].classList.remove('button-positive');
			starElementList[i].classList.add('button-dark');
			starElementList[i].classList.remove('ion-star');
			starElementList[i].classList.add('ion-ios-star-outline');
		}
	}

	// END: Five star rating thang

	// Initialization code

	// Button States
	// Activity button states
	var restaurantClicked = false;
	var barClicked = false;
	var comedyClicked = false;
	var museumClicked = false;
	var musicClicked = false;
	var urbanClicked = false;
	var grittyClicked = false;

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
	var comedyElement = document.getElementById("comedyFilter");
	var museumElement = document.getElementById("museumFilter");
	var musicElement = document.getElementById("musicFilter");
	var urbanElement = document.getElementById("urbanFilter");
	var grittyElement = document.getElementById("grittyFilter");

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
	// Contains all filter elements in the filter page (menu.html)
	var elementTable = new Object(); // or just {}

	// Activity button element mapping
	elementTable["restaurantFilter"] = restaurantElement;
	elementTable["barFilter"] = barElement;
	elementTable["comedyFilter"] = comedyElement;
	elementTable["museumFilter"] = museumElement;
	elementTable["musicFilter"] = musicElement;
	elementTable["urbanFilter"] = urbanElement;
	elementTable["grittyFilter"] = grittyElement;

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
	// Contains the states of all filter elements in the filter page (menu.html)
	var stateTable = new Object();

	// Activity button state mapping
	stateTable["restaurantFilter"] = restaurantClicked;
	stateTable["barFilter"] = barClicked;
	stateTable["comedyFilter"] = comedyClicked;
	stateTable["museumFilter"] = museumClicked;
	stateTable["musicFilter"] = musicClicked;
	stateTable["urbanFilter"] = urbanClicked;
	stateTable["grittyFilter"] = grittyClicked;

	// Budget button state mapping
	stateTable["freeFilter"] = freeClicked;
	stateTable["oneDollarFilter"] = oneDollarClicked;
	stateTable["twoDollarFilter"] = twoDollarClicked;
	stateTable["threeDollarFilter"] = threeDollarClicked;

	// Party size button state mapping
	stateTable["partyOne"] = partyOneClicked;
	stateTable["partyTwo"] = partyTwoClicked;
	stateTable["partyGroup"] = partyGroupClicked;

	var tagsTable = new Object();

	tagsTable["restaurantFilter"] = restaurantElement;
	tagsTable["barFilter"] = barElement;
	tagsTable["comedyFilter"] = comedyElement;
	tagsTable["museumFilter"] = museumElement;
	tagsTable["musicFilter"] = musicElement;
	tagsTable["urbanFilter"] = urbanElement;
	tagsTable["grittyFilter"] = grittyElement;

	var budgetTable = new Object();

	budgetTable["freeFilter"] = freeElement;
	budgetTable["oneDollarFilter"] = oneDollarElement;
	budgetTable["twoDollarFilter"] = twoDollarElement;
	budgetTable["threeDollarFilter"] = threeDollarElement;

	var partySizeTable = new Object();

	partySizeTable["partyOne"] = partyOneElement;
	partySizeTable["partyTwo"] = partyTwoElement;
	partySizeTable["partyGroup"] = partyGroupElement;


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

	// Distance object for location filter
	$scope.distance = {
		min: '1',
		max: '20',
		value: '1'
	}

	$scope.applyFilters = function() {
		var tags = [];
		var budget = [];
		var rating = 0;
		var partySize = 0;
		var distance = 0;

		for (var key in tagsTable) {
			if (stateTable[key]) {
				tags.push(tagsTable[key].getAttribute("value"));
			}
		}

		for (var key in budgetTable) {
			if (stateTable[key]) {
				budget.push(budgetTable[key].getAttribute("value"));
			}
		}

		for (i = 0; i < starClickList.length; i++) {
			if (starClickList[i]) {
				rating = starElementList[i].value;
			}
		}

		for (var key in partySizeTable) {
			if (stateTable[key]) {
				partySize = partySizeTable[key].getAttribute("value");
			}
		}

		distance = $scope.distance.value;

		FilterFactory.setTags(tags);
		FilterFactory.setBudget(budget);
		FilterFactory.setRating(rating);
		FilterFactory.setPartySize(partySize);
		FilterFactory.setDistance(distance);

		$scope.$broadcast('applyFilters');
	}

	$scope.resetFilters = function() {
		for (var key in elementTable) {
			stateTable[key] = false;
			$scope.setButtonState(key, false);
		}

		$scope.ratingClick(0);
		$scope.distance.value = 1;
	}
});


