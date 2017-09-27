//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoCreateController", TeaBasicInfoCreateController);

function TeaBasicInfoCreateController($http, TeaBasicInfo, $state, UnitLabel) {

    var vm = this;

    // vm.unitLabelList = UnitLabel.list();
    $http.get("unitLabel", {cache: true}).then(function (res) {
        var dict = []
        res.data.forEach(function(curr, i, arr){
            dict[curr.id] = curr
        })
        delete dict[0]
        console.log(dict)
        vm.unitLabelListById = dict
    })

    vm.teaBasicInfo = new TeaBasicInfo();
    
    vm.saveTeaBasicInfo = function() {
        vm.errors = undefined;
        vm.teaBasicInfo.$save({}, function() {
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
