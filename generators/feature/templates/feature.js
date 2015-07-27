(function(){
    'use strict';

    angular.module('<%= name %>', [])
        .config(defineRoutes)
        .controller('<%= name %>Controller', <%=name%>Controller);

    function defineRoutes($routeProvider) {
        $routeProvider.when('/<%= name %>', {
            templateUrl: 'app/components/<%= name %>/<%= name %>.html',
            // TODO: Uppercase Name
            controller: '<%= name %>Controller'
        });
    }

    function <%= name %>Controller($scope) {

    }
}());
