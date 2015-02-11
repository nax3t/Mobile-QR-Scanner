'use strict';

angular.module('myControllers', [])

.controller('WelcomeCtrl', function() {

})

.controller('AttendeesCtrl', function($scope, $location, Attendee) {
  $scope.attendees = Attendee.query();
})

.controller('NewTacoCtrl', function($scope, $location, Attendee) {
	$scope.attendee = new Attendee();

	$scope.create = function() {
		Attendee.create({ attendee: $scope.attendee }, function() {
			$location.path('#/attendees');
		});
	};
})

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

