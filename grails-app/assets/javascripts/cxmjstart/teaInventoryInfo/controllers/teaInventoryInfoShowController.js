//= wrapped

angular
    .module("cxmjstart.teaInventoryInfo")
    .controller("TeaInventoryInfoShowController", TeaInventoryInfoShowController);

function TeaInventoryInfoShowController(TeaInventoryInfo, $stateParams, $state) {
    var vm = this;

    TeaInventoryInfo.get({id: $stateParams.id}, function(data) {
        vm.teaInventoryInfo = new TeaInventoryInfo(data);
    }, function() {
        $state.go('teaInventoryInfo.list');
    });

    vm.delete = function() {
        vm.teaInventoryInfo.$delete(function() {
            $state.go('teaInventoryInfo.list');
        }, function() {
            //on error
        });
    };

}
