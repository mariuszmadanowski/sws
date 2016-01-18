(function() {
    'use strict';

    namespaceSws.sws.factory('sites', ['$filter', '$http', function($filter, $http) {
        var sites = [];

        (function() {
            $http({
                method: 'GET',
                url: '/data/sites.json',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(result) {
                sites = result.data;
            }, function(error) {
                // error
            });
        })();

        function getSitesAvaibleCount(site) {
            return $filter('filter')(site.subsites, {
                avaible: true
            }).length;
        }

        return {
            getAll: function() {
                return sites;
            },
            getOffline: function() {
                var result = [];
                angular.forEach(sites, function(s) {
                    if (!s.avaible) {
                        result.push(s);
                    }
                    angular.forEach(s.subsites, function(ss) {
                        if (!ss.avaible) {
                            result.push(ss);
                        }
                    });
                });
                return result;
            },
            isSiteOff: function(site) {
                var result;

                if (typeof site === 'undefined') {
                    throw new Error('Undefined argument "site".');
                }

                result = (getSitesAvaibleCount(site) === 0);
                //(site.subsites | filter: {avaible: true}).length === 0
                return result;
            },
            isSiteOn: function(site) {
                var result;

                if (typeof site === 'undefined') {
                    throw new Error('Undefined argument "site".');
                }

                result = (getSitesAvaibleCount(site) === site.subsites.length);
                //(site.subsites | filter: {avaible: true}).length === site.subsites.length
                return result;
            },
            isSitePartiallyOn: function(site) {
                var count, result;

                if (typeof site === 'undefined') {
                    throw new Error('Undefined argument "site".');
                }

                count = getSitesAvaibleCount(site);
                result = (count !== site.subsites.length && count > 0);
                //(site.subsites | filter: {avaible: true}).length !== site.subsites.length && (site.subsites | filter: {avaible: true}).length > 0
                return result;
            }
        };
    }]);
})();
