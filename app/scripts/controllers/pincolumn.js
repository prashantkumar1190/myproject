'use strict';


angular.module('myprojectApp')
.controller('PinColumn',['$scope',function($scope) {
    $scope.gridOptions = {};
 
  $scope.gridOptions.columnDefs = [
    { name:'id', width:'*', enablePinning:false },
    { name:'name', width:'*', pinnedLeft:true },
    { name:'age', width:'*', pinnedLeft:false  }
   /* { name:'address.street', width:150  },
    { name:'address.city', width:150 },
    { name:'address.state', width:50 },
    { name:'address.zip', width:50 },
    { name:'company', width:100 },
    { name:'email', width:100 },
    { name:'phone', width:200 },
    { name:'about', width:300 },
    { name:'friends[0].name', displayName:'1st friend', width:150 },
    { name:'friends[1].name', displayName:'2nd friend', width:150 },
    { name:'friends[2].name', displayName:'3rd friend', width:150 },*/
  ];
 
    $scope.gridOptions.data = [{"id":"1","name":"Prashant","age":"25"},{"id":"2","name":"Vikas","age":"26"}];

}]);
