//= wrapped

angular
    .module("cxmjstart.geoInfo")
    .controller("GeoInfoEditController", GeoInfoEditController);

function GeoInfoEditController(GeoInfo, $stateParams, $state) {
    var vm = this;

    

    GeoInfo.get({id: $stateParams.id}, function(data) {
        vm.geoInfo = new GeoInfo(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve geoInfo with ID " + $stateParams.id}];
    });

    vm.updateGeoInfo = function() {
        vm.errors = undefined;
        vm.geoInfo.$update(function() {
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
