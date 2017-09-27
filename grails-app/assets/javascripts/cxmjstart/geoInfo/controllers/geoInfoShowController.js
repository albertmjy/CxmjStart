//= wrapped

angular
    .module("cxmjstart.geoInfo")
    .controller("GeoInfoShowController", GeoInfoShowController);

function GeoInfoShowController(GeoInfo, $stateParams, $state) {
    var vm = this;

    GeoInfo.get({id: $stateParams.id}, function(data) {
        vm.geoInfo = new GeoInfo(data);
    }, function() {
        $state.go('geoInfo.list');
    });

    vm.delete = function() {
        vm.geoInfo.$delete(function() {
            $state.go('geoInfo.list');
        }, function() {
            //on error
        });
    };

}
