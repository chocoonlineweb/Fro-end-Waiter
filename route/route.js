(function(angular){
  'use strict';
  angular.module('waiter').config(['$routeProvider', '$locationProvider', '$httpProvider', 'ngMetaProvider', '$authProvider',
    function($routeProvider, $locationProvider, $httpProvider, ngMetaProvider, $authProvider){
      $routeProvider.when('/',{
        templateUrl:  'views/home.html',
        controller:   'HomeController',
        controllerAs: 'homeCtrl'
      }).when('/acerca-de',{
        templateUrl:  'views/about.html',
        controller:   'AboutController',
        controllerAs: 'aboutCtrl'
      }).when('/contactanos',{
        templateUrl:  'views/contact_us.html',
        controller:   'Contact_usController',
        controllerAs: 'contact_usCtrl'
      }).when('/comercios/:slug',{
        templateUrl:  'views/commerces.html',
        controller:   'commercesController',
        controllerAs: 'commercesCtrl'
      }).when('/productos',{
        templateUrl:  'views/products.html',
        controller:   'ProductsController',
        controllerAs: 'productsCtrl'
      }).when('/producto/:slug',{
        templateUrl:  'views/product.html',
        controller:   'ProductController',
        controllerAs: 'productCtrl'
      }).when('/servicios',{
        templateUrl:  'views/services.html',
        controller:   'ServicesController',
        controllerAs: 'servicesCtrl'
      }).when('/servicio/:slug',{
        templateUrl:  'views/service.html',
        controller:   'ServiceController',
        controllerAs: 'serviceCtrl'
      }).when('/inicio-de-sesion',{
        templateUrl:  'views/login.html',
        controller:   'LoginController',
        controllerAs: 'loginCtrl'
      }).when('/registrate',{
        templateUrl:  'views/Register.html',
        controller:   'RegisterController',
        controllerAs: 'registerCtrl'
      }).when('/verificacion',{
        templateUrl:  'views/verify.html',
        controller:   'VerifyController',
        controllerAs: 'verifyCtrl'
      }).when('/404',{
        templateUrl:  'views/error/404.html',
        controller:   '404Controller',
        controllerAs: '404Ctrl'
      }).otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      $authProvider.loginUrl = 'http://localhost:8000/api/auth/login';
      $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = 'null';
    }]);

})(window.angular);
