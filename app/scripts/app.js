'use strict';

/**
 * @ngdoc overview
 * @name myprojectApp
 * @description
 * # myprojectApp
 *
 * Main module of the application.
 */
angular
  .module('myprojectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.grid',
    'ui.grid.pinning',
    'rzModule',
    'ui.grid.resizeColumns',
    'ui.grid.moveColumns',
    'ui.sortable',
    'angular-jqcloud',
    'angular-timeline',
    'dm.stickyNav',
    'flow'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/spinAndSlide', {
        templateUrl: 'views/components/spinAndSlide.html',
        controller: 'SpinSlide',
        controllerAs: 'spinSlide'
      })
      .when('/accordions', {
        templateUrl: 'views/components/accordions.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/clientSidefiltering', {
        templateUrl: 'views/components/clientSideFiltering.html',
        controller: 'ClientSideFilter',
        controllerAs: 'clientSideFilter'
      })
      .when('/dockedNavigationOnScroll', {
        templateUrl: 'views/components/dockedNavigationOnScroll.html',
        controller: '',
        controllerAs: ''
      })
      .when('/dragDropFileUpload', {
        templateUrl: 'views/components/dragDropFileUpload.html',
        controller: 'DragDrop',
        controllerAs: 'dragDrop'
      })
      .when('/html5viewer', {
        templateUrl: 'views/components/html5viewer.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/inLineDocBrwsr', {
        templateUrl: 'views/components/inLineDocBrwsr.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/jumbotron', {
        templateUrl: 'views/components/jumbotron.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pinningOfColumns', {
        templateUrl: 'views/components/pinningOfColumns.html',
        controller: 'PinColumn',
        controllerAs: 'pincolumn'
      })
      .when('/ratingWidget', {
        templateUrl: 'views/components/ratingWidget.html',
        controller: 'RatingWidget',
        controllerAs: 'ratingWidget'
      })
      .when('/resizableHeaders', {
        templateUrl: 'views/components/resizableHeaders.html',
        controller: 'ResizableHeader',
        controllerAs: 'resizableHeader'
      })
      .when('/sortViaDragDrop', {
        templateUrl: 'views/components/sortViaDragDrop.html',
        controller: 'SortViaDragDrop',
        controllerAs: 'sortViaDragDrop'
      })
      .when('/tagClouds', {
        templateUrl: 'views/components/tagClouds.html',
        controller: 'TagCloud',
        controllerAs: 'tagCloud'
      })
      .when('/timelineWidget', {
        templateUrl: 'views/components/timelineWidget.html',
        controller: 'TimelineWidget',
        controllerAs: 'timelineWidget'
      })
      .when('/typeAhead', {
        templateUrl: 'views/components/typeAhead.html',
        controller: 'TypeAhead',
        controllerAs: 'typeahead'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
