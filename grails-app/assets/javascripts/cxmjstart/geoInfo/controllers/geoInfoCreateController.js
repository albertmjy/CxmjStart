//= wrapped

angular
    .module("cxmjstart.geoInfo")
    .controller("GeoInfoCreateController", GeoInfoCreateController);

function GeoInfoCreateController(GeoInfo, $state) {

    var vm = this;
    
    vm.geoInfo = new GeoInfo();
    
    vm.saveGeoInfo = function() {
        vm.errors = undefined;
        vm.geoInfo.$save({}, function() {
            $state.go('geoInfo.show', {id: vm.geoInfo.id});
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };
}
