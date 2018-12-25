(function(angular){
  'use strict';
  angular.module('authService', [])
  .factory('sessionControl', function(){
    return{
      get: function(key){
        return sessionStorage.getItem(key);
      },
      set: function (key, val){
        return sessionStorage.setItem(key, val);
      },
      unset: function (key){
        return sessionStorage.removeItem(key);
      }
    };
  })
  .factory('authUser', function($auth, sessionControl, $location){
    const inCacheSession =  function(email, name, avatar, email_verified_at, status){
      sessionControl.set('userIsLogin', true);
      sessionControl.set('email', email);
      sessionControl.set('name', name);
      sessionControl.set('avatar', avatar);
      sessionControl.set('status', status);
      sessionControl.set('email_verified_at', email_verified_at);
    };
    const outCacheSession = function(){
      sessionControl.unset('userIsLogin');
      sessionControl.unset('email');
      sessionControl.unset('name');
      sessionControl.unset('avatar');
      sessionControl.unset('status');
      sessionControl.unset('email_verified_at');
    };

    const login = function(loginForm){
      var headers = {
        'Access-Control-Allow-Origin':  '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
      }
      $auth.login(loginForm, headers).then(
        function (response){
          inCacheSession(response.data.user.email,
            response.data.user.name,
            response.data.user.avatar,
            response.data.user.status,
            response.data.user.email_verified_at
          );
          $location.path('/');
          console.log(response);
          Materialize.toast('Bienvenido: '+ response.data.user.name, 3000);
        },
        function (error){
          if (error.data) {
            Materialize.toast('Sesion fallida!: '+ error.data.error, 3000);
            outCacheSession();
          }else {
            Materialize.toast('!Error: pass access control check ', 3000);

          }

        }
      );
    };
    return {
      loginApi: function(loginForm){
        login(loginForm);
      },
      logout: function(data){
        $auth.logout();
        outCacheSession();
        Materialize.toast(data+':' + 'Cerro sesion!: ', 3000);
      },
      isLoggedIn: function(){
        return sessionControl.get('userIsLogin') !== null;
      }
    }
  });

})(window.angular);
