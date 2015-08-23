(function(){
    'use strict';

    angular.module('<%= name %>', ['ngRoute'])
        .config(defineRoutes)
        .controller('<%= upperName %>Controller', <%=upperName%>Controller);

    function defineRoutes($routeProvider) {
        $routeProvider.when('/<%= name %>', {
            templateUrl: 'app/<%= name %>/<%= name %>.html',
            controller: '<%= upperName %>Controller'
        });
    }
    function <%= upperName %>Controller($scope) {

    }
}());
