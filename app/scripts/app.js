'use strict';

/**
 * @ngdoc overview
 * @name bomboAngularJsApp
 * @description
 * # bomboAngularJsApp
 *
 * Main module of the application.
 */
angular
  .module('bomboAngularJsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })    
      .when('/form', {
        templateUrl: 'views/form.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tableau', {
        templateUrl: 'views/tableau.html',
        controller: 'BomboCtrl',
        controllerAs: 'bombo'
      })
      .otherwise({
        redirectTo: '/'
      });


  });
