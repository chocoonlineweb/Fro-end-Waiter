(function(angular){
  'use strict';
  function ctrlFooterWeb() {

  }
  angular.module('waiter').component('cmpFooterWeb', {
    templateUrl: 'app/Components/nav.footer.web/nav.detail.web.html',
    controller: ctrlFooterWeb,
    bindings: {
        item: "<"
    }
  });
})(window.angular);
