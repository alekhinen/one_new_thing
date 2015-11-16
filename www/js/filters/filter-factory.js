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

  return filter;
});