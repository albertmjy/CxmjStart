describe("cxmjstart module", function() {

    beforeEach(angular.mock.module("cxmjstart", function() {
    }));

    describe("teaBasicInfoService", function() {

        var teaBasicInfoService;

        beforeEach(angular.mock.inject(function(_teaBasicInfoService_) {
            teaBasicInfoService = _teaBasicInfoService_;
        }));

        it("should be tested", function() {
            expect(true).toEqual(false);
        });

    });

});
