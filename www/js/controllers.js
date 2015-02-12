'use strict';

angular.module('myControllers', [])

.controller('WelcomeCtrl', function() {

})

.controller('AttendeesCtrl', function($scope, $location, Attendee) {
  $scope.attendees = Attendee.query();
})

.controller('UserSessionsCtrl', ['$scope', function($scope) {
		$scope.$on('auth:login-error', function(ev, reason) {
			$scope.error = reason.errors[0];
		});
}])

.controller('UserRegistrationsCtrl', ['$scope', '$location', '$auth', function($scope, $location, $auth) {
	$scope.$on('auth:registration-email-error', function(ev, reason) {
		$scope.error = reason.errors[0];
	});
	$scope.handleRegBtnClick = function() {
		$auth.submitRegistration($scope.registrationForm).then(function() {
			$auth.submitLogin({
				email: $scope.registrationForm.email,
				password: $scope.registrationForm.password
			});
		});
	};
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

