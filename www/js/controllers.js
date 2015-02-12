'use strict';

angular.module('myControllers', [])

.controller('WelcomeCtrl', function() {

})

.controller('AttendeesCtrl', function($scope, $location, Attendee) {
  $scope.attendees = Attendee.query();
})

.controller('UserSessionsCtrl', ['$scope', function($scope) {
	
}])

.controller("qrCtrl", function($scope, $cordovaBarcodeScanner, $location, Attendee) {
  $scope.create = function() {
      $cordovaBarcodeScanner.scan().then(function(imageData) {
          Attendee.create({ attendee: { first: imageData.text } }, function() {
						$location.path('/attendees');
		});
      }, function(error) {
          console.log("An error happened -> " + error);
      });
  };
 
});

