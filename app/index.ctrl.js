'use strict';
sws.controller('indexCtrl', ['$scope', '$location', 'appName', function ($scope, $location, appName) {
    $scope.appName = appName;

    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return 'active';
        } else {
            return '';
        }
    };
}]);
