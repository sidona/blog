'use strict';

(function () {

  class AddController {

    constructor($http, $scope, socket, Auth) {
      this.$http = $http;
      this.socket = socket;
      this.Auth = Auth;
      this.awesomeThings = [];
      console.log('Auth',this.Auth.getCurrentUser().name)

      $scope.$on('$destroy', function () {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newTitle && this.newInfo && this.newStory && this.technology && this.newVideo && this.newProjectType && this.newProjectDifficulty && this.newProjectEstimatedTime && this.Auth.getCurrentUser().name) {
        this.$http.post('/api/things', {
          title: this.newTitle,
          info: this.newInfo,
          story: this.newStory,
          technology: this.technology,
          video_online: this.newVideo,
          project_info_type: this.newProjectType,
          project_info_difficulty: this.newProjectDifficulty,
          project_info_estimated_time:this.newProjectEstimatedTime,
          author:this.Auth.getCurrentUser().name
        });
        this.newTitle = '';
        this.newInfo = '';
        this.newStory = '';
        this.technology = '';
        this.newVideo = '';
        this.newProjectType = '';
        this.newProjectDifficulty = '';
        this.newProjectEstimatedTime='';
        this.Auth.getCurrentUser().name=this.Auth.getCurrentUser().name;
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('blogApp')
    .component('add', {
      templateUrl: 'app/add/addThing.html',
      controller: AddController
    });
})();
