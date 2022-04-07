/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
 (function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.examinations')
        .controller('examinations', examinationsCtrl);
  
    /** @ngInject */
    function examinationsCtrl($state) {
  
     var vm=this;

     vm.register=register;

     function register() {
         $state.go('register');
     }
  
    }
  
  })();
  