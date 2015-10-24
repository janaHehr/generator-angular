(function() {
    'use strict';

    angular.module('<%= safeAppName %>', [
            'ngRoute',
            'pascalprecht.translate'
        ])
        .config(init);

    function init($routeProvider, $locationProvider,$translateProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.otherwise({
            redirectTo: '/'
        });

        //i18n: use it with {{'ModulName.Elementname' | translate}}
       $translateProvider.useStaticFilesLoader({
            prefix:'locales/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('de-DE');
        $translateProvider.fallbackLanguage('de-DE');
    }
})();
