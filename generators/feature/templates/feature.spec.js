'use strict';

describe('<%= name %>', function() {

    var $scope;
    beforeEach(function() {
        angular.mock.module();
        module('<%= name %>');
    });

    beforeEach(inject(function(_$rootScope_,_$controller_) {
        $scope = _$rootScope_.$new();

        _$controller_('<%= upperName %>Controller', {
            $scope: $scope,
        });
    }));

    describe('$scope', function() {
        it('your test', function() {
            expect(true).toBe(true);
        });
    });
});
