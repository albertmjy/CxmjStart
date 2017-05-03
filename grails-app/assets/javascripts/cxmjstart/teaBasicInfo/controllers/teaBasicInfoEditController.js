//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoEditController", TeaBasicInfoEditController);

function TeaBasicInfoEditController(TeaBasicInfo, $stateParams, $state, UnitLabel) {
    var vm = this;

    vm.unitLabelList = UnitLabel.list();

    TeaBasicInfo.get({id: $stateParams.id}, function(data) {
        vm.teaBasicInfo = new TeaBasicInfo(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve teaBasicInfo with ID " + $stateParams.id}];
    });

    vm.updateTeaBasicInfo = function() {
        vm.errors = undefined;
        vm.teaBasicInfo.$update(function() {
            $state.go('teaBasicInfo.show', {id: vm.teaBasicInfo.id});
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
