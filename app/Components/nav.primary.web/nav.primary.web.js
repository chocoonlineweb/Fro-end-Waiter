(function(angular){
  'use strict';
  function ctrlNavigaitorWeb(authUser, $location, $scope, sessionControl) {
    const Me = this;
    $('.button-collapse').sideNav({
        menuWidth: 310, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
      }
    );


    Me.isAuth = authUser.isLoggedIn();

    $scope.$watch(function(){
      return authUser.isLoggedIn();
    }, function(newVal){
      if (typeof newVal !== 'undefined') {
        Me.isAuth = authUser.isLoggedIn();
      }
    });

    Me.auth = {
      email:  sessionControl.get('email'),
      name:   sessionControl.get('name'),
      avatar: sessionControl.get('avatar'),
      status: sessionControl.get('status'),
      verify: sessionControl.get('email_verified_at')
    }

    $scope.$watch(function(){
      return sessionControl.get('email');
    }, function(newVal){
      if (typeof newVal !== 'undefined') {
        Me.auth.email = sessionControl.get('email');
      }
    });

    $scope.$watch(function(){
      return sessionControl.get('name');
    }, function(newVal){
      if (typeof newVal !== 'undefined') {
        Me.auth.name = sessionControl.get('name');
      }
    });

    Me.logout = function(data){
      authUser.logout(data);
    }
    Me.isRouteActive = function (viewLocation){
      return (viewLocation === $location.path()) ? 'active' : '';
    }

  }
  angular.module('waiter').component('cmpNavigaitorWeb', {
    templateUrl: 'app/Components/nav.primary.web/nav.detail.web.html',
    controller: ctrlNavigaitorWeb,
    bindings: {
        item: "<"
    }
  });
})(window.angular);
