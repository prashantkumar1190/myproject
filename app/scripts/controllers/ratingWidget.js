'use strict';


angular.module('myprojectApp')
  .controller('RatingWidget',["$scope", function ($scope) {
     // set the rate and max variables
  $scope.rate = 3;
  $scope.max = 5;
  }]);
