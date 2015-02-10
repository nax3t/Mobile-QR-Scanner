'use strict';

angular.module('myControllers', [])

.controller('AttendeesCtrl', function($scope, $location, Attendee) {
  $scope.attendees = Attendee.query();
})

.controller("qrCtrl", function($scope, $cordovaBarcodeScanner, $location) {
 
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $location.path('#/');
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
 
});

