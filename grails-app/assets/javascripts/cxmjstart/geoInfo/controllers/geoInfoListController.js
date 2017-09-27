//= wrapped

angular
    .module("cxmjstart.geoInfo")
    .controller("GeoInfoListController", GeoInfoListController);

function GeoInfoListController(GeoInfo) {
    var vm = this;

    var max = 10, offset = 0;

    GeoInfo.list({max: max, offset: offset}, function(data) {
        vm.geoInfoList = data;
    });
}
