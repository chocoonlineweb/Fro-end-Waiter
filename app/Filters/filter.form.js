(function(angular){
  'use strict';
  angular.module('waiter').filter('startFrom', function() {
    return function(data, start) {
      return data.slice(start);
    }
  });
  angular.module('waiter').filter('highlighterPen', function($sce){
    return function(value, search){
      if (search=='' || search=='undefined' || !search) {
        return $sce.trustAsHtml(value);
      }else {
        var html = replaceAll(value, search, "<b>" + search.toUpperCase() + "</b>");
        return $sce.trustAsHtml(html);
      }
      function escapeRegExp(str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
      }
      function replaceAll(str, find, replace) {
        return str.replace(new RegExp(escapeRegExp(find), 'gi'), replace);
      }
      return value
    }
  });
})(window.angular);
