//= wrapped

angular
    .module("cxmjstart.teaEvaluationEventInfo")
    .controller("TeaEvaluationEventInfoCreateController", TeaEvaluationEventInfoCreateController);

function TeaEvaluationEventInfoCreateController(TeaEvaluationEventInfo, $state, Users, TeaBasicInfo) {

    var vm = this;
    vm.usersList = Users.list();
    vm.teaBasicInfoList = TeaBasicInfo.list();
    vm.teaEvaluationEventInfo = new TeaEvaluationEventInfo();
    
    vm.saveTeaEvaluationEventInfo = function() {
        vm.errors = undefined;
        vm.teaEvaluationEventInfo.$save({}, function() {
            $state.go('teaEvaluationEventInfo.show', {id: vm.teaEvaluationEventInfo.id});
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
