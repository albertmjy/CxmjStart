//= wrapped

angular
    .module("cxmjstart.teaEvaluationEventInfo")
    .controller("TeaEvaluationEventInfoShowController", TeaEvaluationEventInfoShowController);

function TeaEvaluationEventInfoShowController(TeaEvaluationEventInfo, $stateParams, $state) {
    var vm = this;

    TeaEvaluationEventInfo.get({id: $stateParams.id}, function(data) {
        vm.teaEvaluationEventInfo = new TeaEvaluationEventInfo(data);
    }, function() {
        $state.go('teaEvaluationEventInfo.list');
    });

    vm.delete = function() {
        vm.teaEvaluationEventInfo.$delete(function() {
            $state.go('teaEvaluationEventInfo.list');
        }, function() {
            //on error
        });
    };

}
