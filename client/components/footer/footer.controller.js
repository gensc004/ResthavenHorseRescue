'use strict';

angular.module('resthavenHorseRescueApp')
  .controller('FooterCtrl', function ($scope, $location) {
    // $scope.menu = [{
    //   'title': 'Home',
    //   'link': '/'
    // }, {
    //   'title': 'Donate',
    //   'link': '/donate'
    // }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });