//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoEditController", TeaBasicInfoEditController);

function TeaBasicInfoEditController($http, TeaBasicInfo, $stateParams, $state, UnitLabel) {
    var vm = this;

    // vm.unitLabelList = UnitLabel.list();
    $http.get("unitLabel", {cache: true}).then(function (res) {
        var dict = []
        res.data.forEach(function(curr, i, arr){
            dict[curr.id] = curr
        })
        delete dict[0]
        vm.unitLabelListById = dict
    })

    TeaBasicInfo.get({id: $stateParams.id}, function(data) {
        vm.teaBasicInfo = new TeaBasicInfo(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve teaBasicInfo with ID " + $stateParams.id}];
    });

    vm.updateTeaBasicInfo = function() {
        vm.errors = undefined;
        vm.teaBasicInfo.$update(function() {
            $state.go('teaBasicInfo.show', {id: vm.teaBasicInfo.id});
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };

    // bad code!! move it to database latter
    vm.categoryList = TeaBasicInfo.categoryList
    vm.regionList = TeaBasicInfo.regionList
}
