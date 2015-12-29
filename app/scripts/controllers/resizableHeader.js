'use strict';


angular.module('myprojectApp')
.controller('ResizableHeader',['$scope',function($scope) {
   $scope.gridOptions = {
    enableSorting: true,
    columnDefs: [
      { field: 'id', minWidth: 200, width: 250, enableColumnResizing: true },
      { field: 'name', width: '30%', maxWidth: 200, minWidth: 70 },
      { field: 'age', width: '*' }
    ]
  };
 
    $scope.gridOptions.data = [{"id":"1","name":"Prashant","age":"25"},{"id":"2","name":"Vikas","age":"26"}];

}]);
