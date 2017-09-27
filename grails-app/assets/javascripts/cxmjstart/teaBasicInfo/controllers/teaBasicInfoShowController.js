//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoShowController", TeaBasicInfoShowController);

function TeaBasicInfoShowController($http, TeaBasicInfo, $stateParams, $state, listLoaderService) {
    var vm = this;
    vm.widthOver480 = window.innerWidth>480

    TeaBasicInfo.get({id: $stateParams.id}, function(data) {
        vm.teaBasicInfo = new TeaBasicInfo(data);

        console.log(listLoaderService.unitLabelListById) // works for sharing values ONLY ONCE!

    }, function() {
        $state.go('teaBasicInfo.list');
    });

    vm.delete = function() {
        vm.teaBasicInfo.$delete(function() {
            $state.go('teaBasicInfo.list');
        }, function() {
            //on e]
            // \rror
        });
    };

    $http.get("unitLabel", {cache: true}).then(function (res) {
        var dict = []
        res.data.forEach(function(curr, i, arr){
            dict[curr.id] = curr
        })
        vm.unitLabelListById = dict
    })

}
