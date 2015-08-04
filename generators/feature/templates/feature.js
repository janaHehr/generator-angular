(function(){
    'use strict';

    angular.module('<%= name %>', [])
        .config(defineRoutes)
        .controller('<%= upperName %>Controller', <%=upperName%>Controller);

    function defineRoutes($routeProvider) {
        $routeProvider.when('/<%= name %>', {
            templateUrl: 'app/components/<%= name %>/<%= name %>.html',
            controller: '<%= upperName %>Controller'
        });
    }

    function <%= upperName %>Controller($scope) {

    }
}());
