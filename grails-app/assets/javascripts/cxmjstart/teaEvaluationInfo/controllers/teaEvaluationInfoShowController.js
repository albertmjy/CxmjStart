//= wrapped

angular
    .module("cxmjstart.teaEvaluationInfo")
    .controller("TeaEvaluationInfoShowController", TeaEvaluationInfoShowController);

function TeaEvaluationInfoShowController(TeaEvaluationInfo, $stateParams, $state) {
    var vm = this;

    TeaEvaluationInfo.get({id: $stateParams.id}, function(data) {
        vm.teaEvaluationInfo = new TeaEvaluationInfo(data);
    }, function() {
        $state.go('teaEvaluationInfo.list');
    });

    vm.delete = function() {
        vm.teaEvaluationInfo.$delete(function() {
            $state.go('teaEvaluationInfo.list');
        }, function() {
            //on error
        });
    };

}
