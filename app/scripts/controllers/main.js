'use strict';

/**
 * @ngdoc function
 * @name gdgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gdgApp
 */
angular.module('gdgApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
