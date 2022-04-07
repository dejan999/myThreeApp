/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.examinations', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('examinations', {
            url: '/examinations',
            templateUrl: 'app/pages/examinations/examinations.html',
            controller:'examinations',
            controllerAs:'vm',
            title: 'Medical examinations',
            sidebarMeta: {
              icon: 'ion-android-home',
              order: 0,
            },
          });
    }
  
  })();
  