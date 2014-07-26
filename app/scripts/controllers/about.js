'use strict';

/**
 * @ngdoc function
 * @name gdgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gdgApp
 */
angular.module('gdgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
