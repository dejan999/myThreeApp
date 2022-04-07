/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.register', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('register', {
            url: '/register',
            templateUrl: 'app/pages/register/register.html',
            title: 'Medical examinations',
            sidebarMeta: {
              icon: 'ion-android-home',
              order: 0,
            },
          });
    }
  
  })();
  