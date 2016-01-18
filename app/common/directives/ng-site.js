(function() {
    'use strict';

    namespaceSws.sws.directive('ngSite', ['pingInterval', function(pingInterval) {
        return {
            restrict: 'A',
            require: 'ngModel',
            replace: true,
            transclude: false,
            templateUrl: 'app/common/directives/ng-site.tpl.html',
            link: function(scope, element, attrs, controller) {
                if (!scope.site.subsites.length) {
                    pingInterval.init(scope.site);
                }
            }
        };
    }]);
})();
