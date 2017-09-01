//= wrapped

angular
    .module("cxmjstart.teaEvaluationRecord")
    .controller("TeaEvaluationRecordCreateController", TeaEvaluationRecordCreateController);

function TeaEvaluationRecordCreateController(TeaEvaluationRecord, $state) {

    var vm = this;
    
    vm.teaEvaluationRecord = new TeaEvaluationRecord();
    
    vm.saveTeaEvaluationRecord = function() {
        vm.errors = undefined;
        vm.teaEvaluationRecord.$save({}, function() {
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
