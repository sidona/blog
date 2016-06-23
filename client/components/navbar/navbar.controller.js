'use strict';

class NavbarController {
  //end-non-standard
  menu = [{
    'title': 'add',
    'state': 'add'
  }];

  //start-non-standard
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('blogApp')
  .controller('NavbarController', NavbarController);
