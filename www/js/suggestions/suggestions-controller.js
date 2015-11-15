angular.module('starter.suggestions', ['ionic', 'ionic.contrib.ui.tinderCards'])

.controller('SuggestionsCtrl', function($scope) {
  $scope.suggestions = [
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

  $scope.goToSuggestion = function(buttonId) {
    $(buttonId).addClass('button-going');
    $(buttonId).html('<span class="ion-checkmark"></span> Going');
  };

  $scope.range = function(length) {
    return new Array(length);
  }

})

.controller('SuggestionCtrl', function($scope, $stateParams) {
});
