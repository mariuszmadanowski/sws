'use strict';

sws.factory('sites', ['$filter', function($filter) {
    var sites = [{
        name: 'Google',
        url: 'http://www.google.pl/images/branding/product/ico/googleg_lodp.ico',
        icon: 'google.jpg',
        showSub: false,
        subsites: [{
            name: 'Gmail',
            url: 'http://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico',
            icon: 'gmail.png',
            avaible: false,
            lastTimeAvaible: null
        }, {
            name: 'Analytics',
            url: 'http://www.google.com/analytics/images/favicon.ico',
            icon: 'analytics.png',
            avaible: true,
            lastTimeAvaible: null
        }, {
            name: 'Translate',
            url: 'http://translate.google.pl/',
            icon: 'translate.png',
            avaible: false,
            lastTimeAvaible: null
        }]
    }, {
        name: 'Yahoo!',
        url: 'https://s.yimg.com/rz/l/yahoo_en-US_f_p_142x37.png',
        icon: 'yahoo.png',
        avaible: false,
        lastTimeAvaible: null,
        subsites: []
    }, {
        name: 'Amazon',
        url: 'http://g-ecx.images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V386942464_.gif',
        icon: 'amazon.png',
        avaible: true,
        lastTimeAvaible: null,
        subsites: []
    }, {
        name: 'Google 2',
        url: 'http://www.google.pl/images/branding/product/ico/googleg_lodp.ico',
        icon: 'google.jpg',
        showSub: false,
        subsites: [{
            name: 'Gmail 2',
            url: 'http://ssl.gstatic.com/ui/v1/icons/mail/images/favicon5.ico',
            icon: 'gmail.png',
            avaible: true,
            lastTimeAvaible: null
        }, {
            name: 'Analytics 2',
            url: 'http://www.google.com/analytics/images/favicon.ico',
            icon: 'analytics.png',
            avaible: true,
            lastTimeAvaible: null
        }, {
            name: 'Translate 2',
            url: 'http://translate.google.pl/',
            icon: 'translate.png',
            avaible: true,
            lastTimeAvaible: null
        }]
    }];

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
            if (typeof site === 'undefined') {
                throw new Error('Undefined argument "site".');
            }
            var result = (getSitesAvaibleCount(site) === 0);
            //(site.subsites | filter: {avaible: true}).length === 0
            return result;
        },
        isSiteOn: function(site) {
            if (typeof site === 'undefined') {
                throw new Error('Undefined argument "site".');
            }
            var result = (getSitesAvaibleCount(site) === site.subsites.length);
            //(site.subsites | filter: {avaible: true}).length === site.subsites.length
            return result;
        },
        isSitePartiallyOn: function(site) {
            if (typeof site === 'undefined') {
                throw new Error('Undefined argument "site".');
            }
            var count = getSitesAvaibleCount(site);
            var result = (count !== site.subsites.length && count > 0);
            //(site.subsites | filter: {avaible: true}).length !== site.subsites.length && (site.subsites | filter: {avaible: true}).length > 0
            return result;
        }
    };
}]);
