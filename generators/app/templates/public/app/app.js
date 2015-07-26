(function() {
    'use strict';

    angular.module('<%= safeAppName %>', [
            'ngRoute',
            'start'
        ])
        .config(init);

    function init($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
})();
