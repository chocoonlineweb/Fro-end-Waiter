(function(angular){
  'use strict';
  angular.module('waiter')
    .controller('LoginController', ['authUser', '$scope', function(authUser, $scope){
      const Me = this;
      Me.loginForm = {
        email:    'elkincp5@gmail.com',
        password: '123'
      };
      Me.login = function() {
        authUser.loginApi(Me.loginForm)
      };

    }]);

})(window.angular);
