/**
 * Created by sdonose on 6/17/2016.
 */
'use strict';

(function() {

  class MainDetailController {

    constructor($http, $scope, socket,$stateParams) {
      this.$http = $http;
      this.socket = socket;
      this.$stateParams=$stateParams;
      this.detailThing = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things/'+this.$stateParams.id)
        .then(response => {
          this.detailThing = response.data;
          console.log('detailThing',this.detailThing);
          this.socket.syncUpdates('thing', this.detailThing);
        });
    }


    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('blogApp')
    .component('detail', {
      templateUrl: 'app/main/mainDetail.html',
      controller: MainDetailController
    });
})();
