//= wrapped

angular
    .module("cxmjstart.teaEvaluationInfo")
    .controller("TeaEvaluationInfoListController", TeaEvaluationInfoListController);

function TeaEvaluationInfoListController(TeaEvaluationInfo, TeaEvaluationEventInfo) {
    var vm = this;

    var max = 10, offset = 0;


    // TeaEvaluationEventInfo.list({max: max, offset: offset}, function (data) {
    //     vm.teaEvaluationEventInfoList = data
    // })

    TeaEvaluationInfo.list({max: max, offset: offset}, function(data) {

        console.log(data[0])


        vm.teaEvaluationInfoList = data;
    });
}
