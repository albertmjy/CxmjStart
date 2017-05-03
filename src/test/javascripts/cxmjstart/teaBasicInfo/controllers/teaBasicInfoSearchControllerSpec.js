describe("cxmjstart.teaBasicInfo module", function() {
    var scope;

    beforeEach(angular.mock.module("cxmjstart.teaBasicInfo", function() {
    }));

    beforeEach(angular.mock.inject(function($rootScope) {
        scope = $rootScope.$new();
    }));

    describe("TeaBasicInfoSearchController", function() {

        var ctrl;

        beforeEach(angular.mock.inject(function($controller) {
            ctrl = $controller("TeaBasicInfoSearchController", {});
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
