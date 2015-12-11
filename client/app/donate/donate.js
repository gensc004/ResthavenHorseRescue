'use strict';

angular.module('resthavenHorseRescueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('donate', {
        url: '/donate',
        templateUrl: 'app/donate/donate.html',
        controller: 'DonateCtrl'
      });
  });