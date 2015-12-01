angular.module('starter.suggestions-factory', ['ionic', 'starter.filter-factory', 'starter.history-factory'])

.factory('SuggestionsFactory', function(FilterFactory, HistoryFactory) {
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
      hasBeenTo: true
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
      hasBeenTo: false
    },
    {
      id: 4,
      title: 'House of Blues',
      photo: '/img/boston_hob.jpg',
      rating: 4,
      location: {
        street: '1 I\'m So Blue Ave',
        city: 'Boston',
        state: 'MA',
        zip: 02115
      },
      hours: {
        mon: '10am-10pm',
        tue: '10am-10pm',
        wed: '10am-10pm',
        thu: '10am-10pm',
        fri: '10am-10pm',
        sat: '11am-11:30pm',
        sun: '1-9pm',
      },
      tags: ['nice', 'chill', 'fun', 'music'],
      price: '$$',
      phoneNumber: '(617) 425-5555',
      review: {
        reviewer: 'Mamma B.',
        isFriend: false,
        timestamp: '10/9/2015',
        rating: 4,
        review: 'I f-ing love this place.'
      },
      hasBeenTo: false
    },
    {
      id: 5,
      title: 'Pavement Coffeehouse',
      photo: '/img/pavement_coffeehouse.jpg',
      rating: 5,
      location: {
        street: '15 Gainsborough Street',
        city: 'Boston',
        state: 'MA',
        zip: 02115
      },
      hours: {
        mon: '7-9pm',
        tue: '7-9pm',
        wed: '7-9pm',
        thu: '7-9pm',
        fri: '7-9pm',
        sat: '9-7pm',
        sun: '9-5pm',
      },
      tags: ['tasty', 'loud', 'hot', 'coffee', 'urban', 'restaurant'],
      price: '$$',
      phoneNumber: '(595) 995-9955',
      review: {
        reviewer: 'Carry K.',
        isFriend: true,
        timestamp: '11/14/2015',
        rating: 4,
        review: 'I LOVE Pavement. I just hate that the place takes all of my money.'
      },
      hasBeenTo: false
    },
    {
      id: 6,
      title: 'The Paint Bar',
      photo: '/img/the_paint_bar.jpg',
      rating: 3,
      location: {
        street: '555 Newbury Street',
        city: 'Boston',
        state: 'MA',
        zip: 02112
      },
      hours: {
        mon: '5-10pm',
        tue: '5-10pm',
        wed: '5-10pm',
        thu: '5-11pm',
        fri: '5-11pm',
        sat: '5-11pm',
        sun: 'Closed',
      },
      tags: ['painting', 'fun', 'friends', 'activity', 'bar', 'urban'],
      price: '$$$',
      phoneNumber: '(555) 246-1155',
      review: {
        reviewer: 'Carla S.',
        isFriend: false,
        timestamp: '1/17/2014',
        rating: 3,
        review: 'I like painting but it\'s hard to paint drunk.'
      },
      hasBeenTo: false
    },
    {
      id: 7,
      title: 'Dillon\'s',
      photo: '/img/dillons.jpg',
      rating: 4,
      location: {
        street: '9902 Boylston St',
        city: 'Boston',
        state: 'MA',
        zip: 02115
      },
      hours: {
        mon: '4-10pm',
        tue: '4-10pm',
        wed: '4-10pm',
        thu: '4-11pm',
        fri: '4-11pm',
        sat: '4-11pm',
        sun: '3-9pm',
      },
      tags: ['restaurant', 'bar', 'urban', 'yummy'],
      price: '$$$',
      phoneNumber: '(613) 222-1155',
      review: {
        reviewer: 'Maggie J.',
        isFriend: true,
        timestamp: '1/1/2015',
        rating: 4,
        review: 'Saw all my friends here. What a bar. My beer spilled though.'
      },
      hasBeenTo: false
    },
    {
      id: 8,
      title: 'Museum of Fine Arts',
      photo: '/img/museum_of_fine_arts.jpg',
      rating: 5,
      location: {
        street: '12 Huntington Ave',
        city: 'Boston',
        state: 'MA',
        zip: 02115
      },
      hours: {
        mon: '9-6pm',
        tue: '9-6pm',
        wed: '9-6pm',
        thu: '9-6pm',
        fri: '9-5pm',
        sat: '9-5pm',
        sun: 'Closed',
      },
      tags: ['museum', 'urban', 'art'],
      price: '$',
      phoneNumber: '(500) 246-9990',
      review: {
        reviewer: 'Jack V.',
        isFriend: false,
        timestamp: '3/19/2015',
        rating: 5,
        review: 'Awesome art and I got in for free as a NEU student!'
      },
      hasBeenTo: false
    },
    {
      id: 9,
      title: 'Improv Asylum',
      photo: '/img/improv_asylum.jpg',
      rating: 5,
      location: {
        street: '1 North End Lane',
        city: 'Boston',
        state: 'MA',
        zip: 02100
      },
      hours: {
        mon: '7-11pm',
        tue: '7-11pm',
        wed: '7-11pm',
        thu: '7-11pm',
        fri: '7-11pm',
        sat: '7-11pm',
        sun: '7-11pm',
      },
      tags: ['comedy', 'urban', 'funny', 'gritty'],
      price: '$$',
      phoneNumber: '(101) 123-5593',
      review: {
        reviewer: 'James M.',
        isFriend: true,
        timestamp: '12/20/2014',
        rating: 5,
        review: 'What a great place. Love that it\'s below a CVS!'
      },
      hasBeenTo: false
    },
    {
      id: 10,
      title: 'Paradise Rock Club',
      photo: '/img/paradise_rock_club.jpg',
      rating: 3,
      location: {
        street: '555 Newbury Street',
        city: 'Boston',
        state: 'MA',
        zip: 02112
      },
      hours: {
        mon: '5-10pm',
        tue: '5-10pm',
        wed: '5-10pm',
        thu: '5-11pm',
        fri: '5-11pm',
        sat: '5-11pm',
        sun: 'Closed',
      },
      tags: ['music', 'hot', 'crowded', 'gritty'],
      price: '$$',
      phoneNumber: '(613) 555-1111',
      review: {
        reviewer: 'Matt Z.',
        isFriend: false,
        timestamp: '3/1/2015',
        rating: 3,
        review: 'Good bands but kinda stuffy and smells weird.'
      },
      hasBeenTo: false
    },
    {
      id: 11,
      title: 'Laugh Boston',
      photo: '/img/laugh_boston.jpg',
      rating: 4,
      location: {
        street: '111 Seaport Lane',
        city: 'Boston',
        state: 'MA',
        zip: 02000
      },
      hours: {
        mon: 'Closed',
        tue: '8-11pm',
        wed: '8-11pm',
        thu: '8-11pm',
        fri: '8-11pm',
        sat: '8-11pm',
        sun: 'Closed',
      },
      tags: ['comedy', 'gritty', 'urban', 'fun'],
      price: '$$$',
      phoneNumber: '(123) 333-1135',
      review: {
        reviewer: 'Jamie M.',
        isFriend: true,
        timestamp: '9/7/2015',
        rating: 4,
        review: 'What a great comedy club. Expensive drinks but all around good.'
      },
      hasBeenTo: false
    },
    {
      id: 12,
      title: 'Isabella Stewart Gardner Museum',
      photo: '/img/isabella_stewart_gardner_museum.jpg',
      rating: 5,
      location: {
        street: '33 Hemenway St',
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
        sat: 'Closed',
        sun: 'Closed',
      },
      tags: ['museum', 'art', 'urban', 'pretty'],
      price: '$',
      phoneNumber: '(555) 222-1111',
      review: {
        reviewer: 'Juliet W.',
        isFriend: false,
        timestamp: '11/6/2015',
        rating: 5,
        review: 'Gorgeous museum.'
      },
      hasBeenTo: false
    },
    {
      id: 13,
      title: 'Pour House',
      photo: '/img/pour_house.jpg',
      rating: 3,
      location: {
        street: '1119 Boylston Street',
        city: 'Boston',
        state: 'MA',
        zip: 02112
      },
      hours: {
        mon: '5-11pm',
        tue: '5-11pm',
        wed: '5-11pm',
        thu: '5-11pm',
        fri: '5-11pm',
        sat: '5-11pm',
        sun: '5-9pm',
      },
      tags: ['bar', 'restaurant', 'urban', 'gritty'],
      price: '$',
      phoneNumber: '(102) 222-3210',
      review: {
        reviewer: 'Naini G.',
        isFriend: true,
        timestamp: '10/2/2015',
        rating: 3,
        review: 'Good place to go if you wanna get wasted and have crappy drinks.'
      },
      hasBeenTo: false
    },
    {
      id: 14,
      title: 'The Beehive',
      photo: '/img/the_beehive.jpg',
      rating: 5,
      location: {
        street: '9 Tremont St',
        city: 'Boston',
        state: 'MA',
        zip: 02110
      },
      hours: {
        mon: '10-10pm',
        tue: '10-10pm',
        wed: '10-10pm',
        thu: '11-11pm',
        fri: '11-11pm',
        sat: '11-11pm',
        sun: '10-11pm',
      },
      tags: ['bar', 'restaurant', 'music', 'urban'],
      price: '$$$',
      phoneNumber: '(613) 252-9876',
      review: {
        reviewer: 'Julez T.',
        isFriend: false,
        timestamp: '12/7/2014',
        rating: 5,
        review: 'Awesome place. Would definitely come back for the music.'
      },
      hasBeenTo: false
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
    // ensures that the suggestion fulfills the filter requirements
    function fulfillsRequirements(suggestion) {
      var hasNotBeenTo = !suggestion.hasBeenTo;
      var matchRating = suggestion.rating >= FilterFactory.rating;
      var inList = true;
      if (FilterFactory.tags.length > 0) {
        inList = _.find(FilterFactory.tags, function(tag) {
          return suggestion.tags.indexOf(tag) > -1
        });
      }
      var inBudget = true;
      if (FilterFactory.budget.length > 0) {
        inBudget = _.find(FilterFactory.budget, function(budget) {
          return suggestion.price == budget;
        });
      }
      return hasNotBeenTo && matchRating && !!inList && !!inBudget;
    }

    var result = [];
    var suggestionsLength = suggestions.options.length;
    for (var i = 0; i < suggestionsLength; i++) {
      if (fulfillsRequirements(suggestions.options[i])) {
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

  /**
   * setAsGoing()
   * @description: Sets a suggestion as going (hasBeenTo = true)
   * @param suggestionId The id of the suggestion
   */
  suggestions.setAsGoing = function(suggestionId) {
    var suggestionsLength = suggestions.options.length;
    for (var i = 0; i < suggestionsLength; i++) {
        if (suggestionId == suggestions.options[i].id) {
          suggestions.options[i].hasBeenTo = true;
          HistoryFactory.addToHistory(suggestions.options[i]);
        }
    }
  };

  return suggestions;
});
