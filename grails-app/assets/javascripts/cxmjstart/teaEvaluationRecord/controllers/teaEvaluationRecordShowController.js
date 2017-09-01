//= wrapped

angular
    .module("cxmjstart.teaEvaluationRecord")
    .controller("TeaEvaluationRecordShowController", TeaEvaluationRecordShowController);

function TeaEvaluationRecordShowController(TeaEvaluationRecord, $stateParams, $state) {
    var vm = this;

    TeaEvaluationRecord.get({id: $stateParams.id}, function(data) {
        vm.teaEvaluationRecord = new TeaEvaluationRecord(data);
    }, function() {
        $state.go('teaEvaluationRecord.list');
    });

    vm.delete = function() {
        vm.teaEvaluationRecord.$delete(function() {
            $state.go('teaEvaluationRecord.list');
        }, function() {
            //on error
        });
    };

}
