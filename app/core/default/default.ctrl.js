'use strict';
sws.controller('defaultCtrl', ['$scope', '$interval', 'sites', function ($scope, $interval, sites) {
    $scope.sites = sites.getAll();
    $scope.offlineSites = sites.getOffline();
}]);
