//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoListController", TeaBasicInfoListController);

function TeaBasicInfoListController($http, TeaBasicInfo, advFilterService, filterService, listLoaderService) {
    var vm = this;

    var max = 10, offset = 0;

    // <480 mobile, otherwise PC
    vm.widthOver480 = window.innerWidth>480

    // my code

    console.log(listLoaderService)
    window.onscroll = listLoaderService.bottomToloadItems(max, offset)


    // vm.searchModel = searchService.dataModle
    // var searchMap = vm.searchModel

    // filter actions
    // vm.searchService = searchService
    // vm.submitSearch = function () {
    //     var searchMap = searchService.dataModle
    //     vm.searchService.search(searchMap).$promise.then(function (data) {
    //         vm.teaBasicInfoList = data
    //     })
    // }

    // vm.searchService = searchService
    // searchService.output(vm.teaBasicInfoList)

    TeaBasicInfo.list({max: max, offset: offset}, function(data) {
        vm.teaBasicInfoList = data;
    });

    // UnitLabel.list({max: 10, offset: 0}, function (data) {
    //     var dict = []
    //     data.forEach(function (curr, i, arr) {
    //         dict[curr.id] = curr
    //     })
    //     listLoaderService.unitLabelListById = vm.unitLabelListById = dict
    // })

    $http.get("unitLabel", {cache: true}).then(function (res) {
        var dict = []
        res.data.forEach(function(curr, i, arr){
            dict[curr.id] = curr
        })
        vm.unitLabelListById = dict
    })

    vm.filter = filterService(max, offset, function(data){
        vm.teaBasicInfoList = data;
    })

    vm.FullFilter = advFilterService(max, offset, function(data){
        vm.teaBasicInfoList = data;
    })

    // really bad! change it latter!!!!!!!!!!!!
    vm.categoryList = TeaBasicInfo.categoryList
    vm.regionList = TeaBasicInfo.regionList

}
