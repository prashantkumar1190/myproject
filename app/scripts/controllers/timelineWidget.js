'use strict';

angular.module('myprojectApp')
  .controller('TimelineWidget',["$scope", function ($scope) {
	 $scope.events = [{
	    badgeClass: 'info',
	    badgeIconClass: 'glyphicon-check',
	    title: 'Order',
	    content: 'MKS Toolkit'
	  }, {
	    badgeClass: 'primary',
	    badgeIconClass: 'glyphicon-credit-card',
	    title: 'Payment',
	    content: 'Invoice is in name of Ariba Tech'
	  },{
	    badgeClass: 'success',
	    badgeIconClass: 'glyphicon-check',
	    title: 'Success',
	    content: 'Order Placed'
	  }];
  }]);
