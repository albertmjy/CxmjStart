//= wrapped

angular
    .module("cxmjstart.teaEvaluationEventInfo")
    .controller("TeaEvaluationEventInfoListController", TeaEvaluationEventInfoListController);

function TeaEvaluationEventInfoListController(TeaEvaluationEventInfo) {
    var vm = this;

    var max = 10, offset = 0;

    TeaEvaluationEventInfo.list({max: max, offset: offset}, function(data) {
        vm.teaEvaluationEventInfoList = data;
        // vm.teaEvaluationEventInfoList = data.TeaEvaluationEventInfo;
        // vm.teaBasicInfoList = data.TeaBasicInfo;
        // vm.UsersList = data.Users;
    });
}
