angular.module('starter.history-factory', ['ionic'])

.factory('HistoryFactory', function() {
  var history = {};

  history.histories = [
    {
      id: 1,
      suggestion: {
        id: 2,
        title: 'Petey Pete\'s Pizza & Pasta',
        photo: '/img/petey_petes.jpg',
        rating: 1,
        location: {
          street: '123 Pete St',
          city: 'Cambridge',
          state: 'MA',
          zip: 02110
        }
      },
      userRating: false,
      userReview: false,
      userTimestamp: false
    }
  ];

  /**
   * getHistory()
   * @description: Gets all the history objects
   * @returns Array An array of all history objects.
   */
  history.getHistory = function() {
    return history.histories;
  };

  /**
   * addToHistory()
   * @description: Adds a suggestion to the histories array.
   * @param suggestion A suggestion object
   * @returns None
   */
  history.addToHistory = function(suggestion) {
    var newHistory = {
      id: history.histories[0].id + 1,
      suggestion: suggestion,
      userRating: false,
      userReview: false,
      userTimestamp: false
    };
    history.histories.unshift(newHistory);
  };

  /**
   * addReviewToHistory()
   * @description: Updates a history object with a review.
   * @param historyId A number
   * @param review A review object
   * @returns None
   */
  history.addReviewToHistory = function(historyId, review) {
    var historiesLength = history.histories.length;
    for (var i = 0; i < historiesLength; i++) {
        if (historyId == -1) {
          break;
        }

        if (history.histories[i].id == historyId) {
          var hist = history.histories[i];
          hist.userRating = review.userRating;
          hist.userReview = review.userReview;
          var currentTime = new Date();
          hist.userTimestamp = currentTime.getMonth() + '/' + currentTime.getDay() + '/' + currentTime.getYear();
        }
    }
  };

  return history;
});
