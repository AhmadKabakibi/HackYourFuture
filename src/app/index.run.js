(function() {
  'use strict';

  angular
    .module('hyfBeta2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
