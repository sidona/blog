'use strict';

angular.module('blogApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('add', {
      url: '/add',
      template: '<add></add>'
    });
  });
angular.module('blogApp')
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.youtube.com/**'
    ]);
  });
