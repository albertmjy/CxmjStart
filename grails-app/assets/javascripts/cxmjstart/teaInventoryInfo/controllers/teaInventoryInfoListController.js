//= wrapped

angular
    .module("cxmjstart.teaInventoryInfo")
    .controller("TeaInventoryInfoListController", TeaInventoryInfoListController);

function TeaInventoryInfoListController(TeaInventoryInfo) {
    var vm = this;

    var max = 10, offset = 0;

    TeaInventoryInfo.list({max: max, offset: offset}, function(data) {
        vm.teaInventoryInfoList = data;
    });
}
