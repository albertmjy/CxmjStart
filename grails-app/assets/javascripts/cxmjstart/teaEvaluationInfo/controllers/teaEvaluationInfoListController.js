//= wrapped

angular
    .module("cxmjstart.teaEvaluationInfo")
    .controller("TeaEvaluationInfoListController", TeaEvaluationInfoListController);

function TeaEvaluationInfoListController(TeaEvaluationInfo) {
    var vm = this;

    var max = 10, offset = 0;

    TeaEvaluationInfo.list({max: max, offset: offset}, function(data) {
        vm.teaEvaluationInfoList = data;
    });
}
