'use strict';

angular.module('blogApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
      url: '/',
      template: '<main></main>'
    })
      .state('detail', {
        url: '/main/:id',
        template: '<detail></detail>'
      });
  });
