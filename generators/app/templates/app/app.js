(function() {
    'use strict';

    angular.module('<%= safeAppName %>', [
            'ngRoute'
        ])
        .config(init);

    function init($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
})();
