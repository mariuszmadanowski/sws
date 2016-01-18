(function() {
    'use strict';

    namespaceSws.sws.controller('defaultCtrl', ['$scope', '$interval', 'sites', function($scope, $interval, sites) {
        $scope.sites = sites;
    }]);
})();
