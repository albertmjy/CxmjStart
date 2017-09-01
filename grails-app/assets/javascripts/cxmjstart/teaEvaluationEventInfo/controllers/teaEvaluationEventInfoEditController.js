//= wrapped

angular
    .module("cxmjstart.teaEvaluationEventInfo")
    .controller("TeaEvaluationEventInfoEditController", TeaEvaluationEventInfoEditController);

function TeaEvaluationEventInfoEditController(TeaEvaluationEventInfo, $stateParams, $state, Users, TeaBasicInfo) {
    var vm = this;

    vm.usersList = Users.list();
    vm.teaBasicInfoList = TeaBasicInfo.list();

    TeaEvaluationEventInfo.get({id: $stateParams.id}, function(data) {
        vm.teaEvaluationEventInfo = new TeaEvaluationEventInfo(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve teaEvaluationEventInfo with ID " + $stateParams.id}];
    });

    vm.updateTeaEvaluationEventInfo = function() {
        vm.errors = undefined;
        vm.teaEvaluationEventInfo.$update(function() {
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
