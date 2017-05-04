//= wrapped

angular
    .module("cxmjstart.teaEvaluationInfo")
    .controller("TeaEvaluationInfoCreateController", TeaEvaluationInfoCreateController);

function TeaEvaluationInfoCreateController(TeaEvaluationInfo, $state, TeaEvaluationEventInfo, Users, TeaBasicInfo) {

    var vm = this;
    vm.teaEvaluationEventInfoList = TeaEvaluationEventInfo.list();
    vm.usersList = Users.list();
    vm.teaBasicInfoList = TeaBasicInfo.list();
    vm.teaEvaluationInfo = new TeaEvaluationInfo();
    
    vm.saveTeaEvaluationInfo = function() {
        vm.errors = undefined;
        vm.teaEvaluationInfo.$save({}, function() {
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
