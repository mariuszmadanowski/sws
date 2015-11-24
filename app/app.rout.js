'use strict';

sws.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/core/default/default.tpl.html',
            controller: 'defaultCtrl'
        })
        .when('/about-us', {
            templateUrl: 'app/core/about-us/about-us.tpl.html'
        })
        .when('/contact', {
            templateUrl: 'app/core/contact/contact.tpl.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});
