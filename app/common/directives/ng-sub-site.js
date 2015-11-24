'use strict';

sws.directive('ngSubSite', ['pingInterval', function(pingInterval) {
    return {
        restrict: 'A',
        require: 'ngModel',
        replace: true,
        transclude: false,
        templateUrl: 'app/common/directives/ng-sub-site.tpl.html',
        link: function(scope, element, attrs, controller) {
            pingInterval.init(scope.site);
        }
    };
}]);
