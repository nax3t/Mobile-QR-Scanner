angular.module('myControllers', [])

.controller('AttendeesCtrl', ['$scope', function($scope) {
	$scope.attendees = [{
		first: 'Dana',
		last: 'Grissom'
  },
  {
    first: 'Ben',
    last: 'Manning'
  },
  {
    first: 'Ian',
    last: 'Schoonover'
  }];
}])

.controller("qrCtrl", function($scope, $cordovaBarcodeScanner, $location) {
 
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $location.path('#/');
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
 
});

