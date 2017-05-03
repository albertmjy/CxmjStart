//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoCreateController", TeaBasicInfoCreateController);

function TeaBasicInfoCreateController(TeaBasicInfo, $state, UnitLabel) {

    var vm = this;
    vm.unitLabelList = UnitLabel.list();
    vm.teaBasicInfo = new TeaBasicInfo();
    
    vm.saveTeaBasicInfo = function() {
        vm.errors = undefined;
        vm.teaBasicInfo.$save({}, function() {
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
