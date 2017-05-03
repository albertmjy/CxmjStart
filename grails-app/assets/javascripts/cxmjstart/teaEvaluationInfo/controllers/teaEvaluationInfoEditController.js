//= wrapped

angular
    .module("cxmjstart.teaEvaluationInfo")
    .controller("TeaEvaluationInfoEditController", TeaEvaluationInfoEditController);

function TeaEvaluationInfoEditController(TeaEvaluationInfo, $stateParams, $state, Users, TeaBasicInfo) {
    var vm = this;

    vm.usersList = Users.list();
    vm.teaBasicInfoList = TeaBasicInfo.list();

    TeaEvaluationInfo.get({id: $stateParams.id}, function(data) {
        vm.teaEvaluationInfo = new TeaEvaluationInfo(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve teaEvaluationInfo with ID " + $stateParams.id}];
    });

    vm.updateTeaEvaluationInfo = function() {
        vm.errors = undefined;
        vm.teaEvaluationInfo.$update(function() {
            $state.go('teaEvaluationInfo.show', {id: vm.teaEvaluationInfo.id});
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
