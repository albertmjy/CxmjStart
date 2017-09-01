//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoListController", TeaBasicInfoListController);

function TeaBasicInfoListController(TeaBasicInfo, UnitLabel, searchService, listLoaderService) {
    var vm = this;

    var max = 10, offset = 0;

    // <480 mobile, otherwise PC
    vm.widthOver480 = window.innerWidth>480

    // my code
    // var searchPan = {
    //     show: false,
    //     showFilter: function () {
    //         this.show = true
    //         // console.log(listSearchService.get())
    //     },
    //     hideFilter: function () {
    //         this.show = false
    //     },
    //     search: function () {
    //         this.hideFilter()
    //
    //         // remvoe the empty properties
    //         for (var key in searchMap){
    //             if (!searchMap[key].trim()){
    //                 delete searchMap[key]
    //                 console.log("Parameter (" + key + ") was deleted since the value is empty ")
    //             }
    //         }
    //         searchService.search(searchMap).$promise.then(function (data) {
    //
    //             vm.teaBasicInfoList = data;
    //         })
    //
    //     }
    //
    // }

    console.log(listLoaderService)
    window.onscroll = listLoaderService.bottomToloadItems(max, offset)


    // vm.searchModel = searchService.dataModle
    // var searchMap = vm.searchModel

    // filter actions
    vm.searchService = searchService
    vm.submitSearch = function () {
        var searchMap = searchService.dataModle
        vm.searchService.search(searchMap).$promise.then(function (data) {
            vm.teaBasicInfoList = data
        })
    }

    // vm.searchService = searchService
    // searchService.output(vm.teaBasicInfoList)

    TeaBasicInfo.list({max: max, offset: offset}, function(data) {
        var label = UnitLabel.get(1)
        console.log(label)


        console.log(data)
        vm.teaBasicInfoList = data;
    });
}
