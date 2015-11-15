angular.module('starter.suggestions', ['ionic', 'ionic.contrib.ui.tinderCards'])

.controller('SuggestionsCtrl', function($scope) {
  $scope.suggestions = [
    {
      id: 1,
      title: 'Symphony Sushi',
      photos: [],
      rating: 3,
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
      tags: ['cool', 'fresh', 'sushi'],
      price: '$$',
      phoneNumber: '(555) 555-5555',
      reviews: [{
        reviewer: 'Ariel W.',
        isFriend: true,
        timestamp: Date.now(),
        rating: 5,
        review: 'I love their chicken dumpling soup. Usually get two orders!'
      }],
      hasBeenTo: false
    },
    {
      id: 2,
      title: 'Petey Pete\'s Pizza & Pasta',
      photos: [],
      rating: 3,
      location: '45 Gainsborough St, Boston, MA 02115',
      hours: {
        mon: '9-5pm',
        tue: '9-5pm',
        wed: '9-5pm',
        thu: '9-5pm',
        fri: '9-5pm',
        sat: 'closed',
        sun: 'closed',
      },
      tags: ['cool', 'fresh', 'pizza'],
      price: 1,
      phoneNumber: '(555) 555-5555',
      reviews: [{
        reviewer: 'Nick A.',
        isFriend: false,
        timestamp: Date.now(),
        rating: 1,
        review: 'The pizza is crummy. Pete is an asshole.'
      }],
      hasBeenTo: false
    }
  ];

  $scope.cardDestroyed = function(index) {
    $scope.suggestions.splice(index, 1);
  };

  $scope.cardSwiped = function(index) {
    // var newCard = // new card data
    // $scope.suggestions.push(newCard);
  };
})

.controller('SuggestionCtrl', function($scope, $stateParams) {
});
