'use strict';

sws.service('pingInterval', ['$interval', 'ping', function($interval, ping) {
    var stopInterval;

    this.init = function(site) {
        if (typeof site === 'undefined') {
            throw new Error('Undefined argument "site".');
        }

        function updateAvaible() {
            new ping.test(site.url, function(status) {
                site.avaible = status;
                if (site.avaible) {
                    site.lastTimeAvaible = new Date();
                }
            });
        }

        stopInterval = $interval(updateAvaible, 1000);

        element.on('$destroy', function() {
            $interval.cancel(stopInterval);
        });
    };
}]);
