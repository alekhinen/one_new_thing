angular.module('starter.suggestions-factory', ['ionic'])

.factory('SuggestionsFactory', function() {
  var suggestions = {};

  suggestions.options = [
    {
      id: 1,
      title: 'Symphony Sushi',
      photo: '/img/symphony_sush.jpg',
      rating: 4,
      location: {
        street: '45 Gainsborough St',
        city: 'Boston',
        state: 'MA',
        zip: 02115
      },
      hours: {
        mon: '9-5pm',
        tue: '9-5pm',
        wed: '9-5pm',
        thu: '9-5pm',
        fri: '9-5pm',
        sat: '9-5pm',
        sun: '9-5pm',
      },
      tags: ['cool', 'fresh', 'sushi', 'restaurant'],
      price: '$$',
      phoneNumber: '(555) 555-5555',
      review: {
        reviewer: 'Ariel W.',
        isFriend: true,
        timestamp: '10/10/2015',
        rating: 5,
        review: 'I love their chicken dumpling soup. Usually get two orders!'
      },
      hasBeenTo: false
    },
    {
      id: 2,
      title: 'Petey Pete\'s Pizza & Pasta',
      photo: '/img/petey_petes.jpg',
      rating: 1,
      location: {
        street: '123 Pete St',
        city: 'Cambridge',
        state: 'MA',
        zip: 02110
      },
      hours: {
        mon: '9-5pm',
        tue: '9-5pm',
        wed: '9-5pm',
        thu: '9-5pm',
        fri: '9-5pm',
        sat: 'Closed',
        sun: 'Closed',
      },
      tags: ['gritty', 'urban', 'pizza', 'restaurant'],
      price: '$',
      phoneNumber: '(555) 555-5555',
      review: {
        reviewer: 'Nick A.',
        isFriend: false,
        timestamp: '10/15/2015',
        rating: 1,
        review: 'The pizza is crummy. Pete is an asshole.'
      },
      hasBeenTo: false
    },
    {
      id: 3,
      title: 'Panera Bread',
      photo: '/img/panera_bread.jpg',
      rating: 3,
      location: {
        street: '289 Huntington Ave',
        city: 'Boston',
        state: 'MA',
        zip: 02115
      },
      hours: {
        mon: '10-10pm',
        tue: '10-10pm',
        wed: '10-10pm',
        thu: '10-10pm',
        fri: '10-10pm',
        sat: '11-8pm',
        sun: '1-7pm',
      },
      tags: ['quick', 'cheesey', 'chill', 'restaurant'],
      price: '$',
      phoneNumber: '(617) 425-8565',
      review: {
        reviewer: 'Niko S.',
        isFriend: false,
        timestamp: '9/9/2015',
        rating: 3,
        review: 'It\'s just ok.'
      },
      hasBeenTo: true
    }
  ];

  /**
   * getSuggestions()
   * @description: Gets all the suggestions
   * @returns Array An array of all suggestion objects.
   */
  suggestions.getSuggestions = function() {
    return suggestions.options;
  };

  /**
   * getFilteredSuggestions()
   * @description: Gets the suggestions which hold true for the following:
   *               - have not been visited by the user
   *               - has the same tags as the filter tags
   *               - has the same price as the filter price
   * @param suggestionId The id of the suggestion
   * @returns Object a suggestion object
   */
  suggestions.getFilteredSuggestions = function() {
    // TODO: filter based off filters controller (chris needs to implement).
    var result = [];
    var suggestionsLength = suggestions.options.length;
    for (var i = 0; i < suggestionsLength; i++) {
        if (!suggestions.options[i].hasBeenTo) {
          result.push(suggestions.options[i]);
        }
    }
    return result;
  };

  /**
   * getSuggestion()
   * @description: Gets the suggestion with the specified id
   * @param suggestionId The id of the suggestion
   * @returns Object a suggestion object
   */
  suggestions.getSuggestion = function(suggestionId) {
    var suggestionsLength = suggestions.options.length;
    for (var i = 0; i < suggestionsLength; i++) {
        if (suggestionId == suggestions.options[i].id) {
          return suggestions.options[i];
        }
    }
    return {};
  };

  return suggestions;
});
