//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoShowController", TeaBasicInfoShowController);

function TeaBasicInfoShowController(TeaBasicInfo, $stateParams, $state) {
    var vm = this;
    vm.widthOver480 = window.innerWidth>480

    TeaBasicInfo.get({id: $stateParams.id}, function(data) {
        vm.teaBasicInfo = new TeaBasicInfo(data);
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
