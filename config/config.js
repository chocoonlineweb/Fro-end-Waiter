(function(angular){
  'use strict';
  angular.module('waiter').run(function($rootScope, $location, $browser, authUser){
    $browser.baseHref = function () { return "/" };
    const privateRoute_in = [
      '/star',
      '/favorites',
      '/lik',
      '/registrate',
      '/inicio-de-sesion'
    ];
    const privateRoute_out = [
      '/star',
      '/favorites',
      '/lik',
      '/'
    ];
    $rootScope.$on('$routeChangeStart', function(){
      if (authUser.isLoggedIn()) {
        if (($.inArray($location.path(), privateRoute_out) !== -1) && !authUser.isLoggedIn()) {
          //$location.path('/inicio-de-sesion')
        }
      }else {

      }

    });

  });
})(window.angular);
