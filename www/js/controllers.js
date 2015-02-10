angular.module('myControllers', ['ja.qr'])

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

.controller("qrCtrl", function($scope, $cordovaBarcodeScanner) {
 
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert('Logging you in!');
            window.open(imageData.text, '_blank', 'location=yes')
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
 
});

