//= wrapped

angular
    .module("cxmjstart.teaInventoryInfo")
    .controller("TeaInventoryInfoEditController", TeaInventoryInfoEditController);

function TeaInventoryInfoEditController(TeaInventoryInfo, $stateParams, $state, UnitLabel, TeaBasicInfo) {
    var vm = this;

    vm.unitLabelList = UnitLabel.list();
    vm.teaBasicInfoList = TeaBasicInfo.list();

    TeaInventoryInfo.get({id: $stateParams.id}, function(data) {
        vm.teaInventoryInfo = new TeaInventoryInfo(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve teaInventoryInfo with ID " + $stateParams.id}];
    });

    vm.updateTeaInventoryInfo = function() {
        vm.errors = undefined;
        vm.teaInventoryInfo.$update(function() {
            $state.go('teaInventoryInfo.show', {id: vm.teaInventoryInfo.id});
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
