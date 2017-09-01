//= wrapped

angular
    .module("cxmjstart.teaEvaluationRecord")
    .controller("TeaEvaluationRecordEditController", TeaEvaluationRecordEditController);

function TeaEvaluationRecordEditController(TeaEvaluationRecord, $stateParams, $state) {
    var vm = this;

    

    TeaEvaluationRecord.get({id: $stateParams.id}, function(data) {
        vm.teaEvaluationRecord = new TeaEvaluationRecord(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve teaEvaluationRecord with ID " + $stateParams.id}];
    });

    vm.updateTeaEvaluationRecord = function() {
        vm.errors = undefined;
        vm.teaEvaluationRecord.$update(function() {
            $state.go('teaEvaluationRecord.show', {id: vm.teaEvaluationRecord.id});
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
