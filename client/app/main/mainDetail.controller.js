/**
 * Created by sdonose on 6/17/2016.
 */
'use strict';

(function() {

  class MainDetailController {

    constructor($http, $scope, socket,$stateParams,Auth) {
      this.$http = $http;
      this.socket = socket;
      this.$stateParams=$stateParams;
      this.Auth = Auth;
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
    addComment(){
      if(this.newCommentContent && this.Auth.getCurrentUser().name){
        this.$http.post('/api/things/'+this.$stateParams.id,{
          content:this.newCommentContent,
          author:this.Auth.getCurrentUser().name
        })
      }
      this.newCommentContent='';
      this.Auth.getCurrentUser().name=this.Auth.getCurrentUser().name;
     
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
