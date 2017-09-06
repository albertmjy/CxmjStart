//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoShowController", TeaBasicInfoShowController);

function TeaBasicInfoShowController(TeaBasicInfo, $stateParams, $state, listLoaderService) {
    var vm = this;
    vm.widthOver480 = window.innerWidth>480

    TeaBasicInfo.get({id: $stateParams.id}, function(data) {
        vm.teaBasicInfo = new TeaBasicInfo(data);
        vm.unitLabelListById = listLoaderService.unitLabelListById

        console.log(listLoaderService.unitLabelListById) // works for sharing values




    }, function() {
        $state.go('teaBasicInfo.list');
    });

    vm.delete = function() {
        vm.teaBasicInfo.$delete(function() {
            $state.go('teaBasicInfo.list');
        }, function() {
            //on e]
            // \rror
        });
    };

}
