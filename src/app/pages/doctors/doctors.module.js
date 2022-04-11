/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.doctors', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('doctors', {
            url: '/doctors',
            title: 'Doctors',
            templateUrl: 'app/pages/doctors/doctors.html',
            controller: 'DoctorsCtrl',
          });
    }
  
  })();
  