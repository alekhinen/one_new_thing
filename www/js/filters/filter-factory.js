angular.module('starter.filter-factory', ['ionic'])

.factory('FilterFactory', function() {
  var filter = {
    tags: [],
    budget: [],
    rating: 0,
    partySize: 0,
    distance: 0
  };

  filter.setTags = function(tags) {
    filter.tags = tags;
  }

  filter.setBudget = function(budget) {
    filter.budget = budget;
  }

  filter.setRating = function(rating) {
    filter.rating = rating;
  }

  filter.setPartySize = function(partySize) {
    filter.partySize = partySize;
  }

  filter.setDistance = function(distance) {
    filter.distance = distance;
  }

  return filter;
});