'use strict';
sws.directive('ngSite', ['$animate', '$interval', 'ping', function($animate, $interval, ping) {
    return {
        restrict: 'A',
        require: '^ngModel',
        replace: true,
        transclude: false,
        templateUrl: 'app/common/directives/ng-site.tpl.html',
        link: function(scope, element, attrs, controller) {
            if (!scope.site.subsites.length) {
                var stopInterval;

                function updateAvaible() {
                    new ping.test(scope.site.url, function(status) {
                        scope.site.avaible = status;
                        if (scope.site.avaible) {
                            scope.site.lastTimeAvaible = new Date();
                        }
                    });
                }

                stopInterval = $interval(updateAvaible, 1000);

                element.on('$destroy', function() {
                    $interval.cancel(stopInterval);
                });
            }
        }
    };
}]);
