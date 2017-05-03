//= wrapped

angular
    .module("cxmjstart.teaInventoryInfo")
    .controller("TeaInventoryInfoCreateController", TeaInventoryInfoCreateController);

function TeaInventoryInfoCreateController(TeaInventoryInfo, $state, UnitLabel, TeaBasicInfo) {

    var vm = this;
    vm.unitLabelList = UnitLabel.list();
    vm.teaBasicInfoList = TeaBasicInfo.list();
    vm.teaInventoryInfo = new TeaInventoryInfo();
    
    vm.saveTeaInventoryInfo = function() {
        vm.errors = undefined;
        vm.teaInventoryInfo.$save({}, function() {
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
