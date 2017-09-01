//= wrapped

angular
    .module("cxmjstart.teaEvaluationRecord")
    .controller("TeaEvaluationRecordListController", TeaEvaluationRecordListController);

function TeaEvaluationRecordListController(TeaEvaluationRecord) {
    var vm = this;

    var max = 10, offset = 0;

    TeaEvaluationRecord.list({max: max, offset: offset}, function(data) {

        console.log(data[0].date )
        console.log(data[1].date )


        vm.teaEvaluationRecordList = data;
    });
}
