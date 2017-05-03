//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .controller("TeaBasicInfoSearchController", TeaBasicInfoSearchController);

function TeaBasicInfoSearchController(TeaBasicInfo) {
    var vm = this;

    var max = 10, offset = 0;


    vm.searchModel = {}
    // vm.searchModel.name = "gggg"

    var searchMap = vm.searchModel
    // searchMap.brand = "古玉"`

    // my code
    var searchPan = {
        show: false,
        showFilter: function () {
            this.show = true
            // console.log(listSearchService.get())
        },
        hideFilter: function () {
            this.show = false
        },
        search: function () {
            this.hideFilter()
            TeaBasicInfo.search(searchMap, function (data) {
                console.log("submit search")

                console.log(data)

                vm.widthOver480 = window.innerWidth>480
                vm.searchPane = searchPan

                vm.teaBasicInfoList = data;
            })
        }

    }

    // listSearchService.get().then(function(response) {
    //     vm.applicationData = response.data;
    //     console.log(response.data)
    // });



    TeaBasicInfo.search(searchMap, function (data) {
        console.log(data)

        vm.widthOver480 = window.innerWidth>480
        vm.searchPane = searchPan

        vm.teaBasicInfoList = data;
    })

    // var myId = 1
    // TeaBasicInfo.list({max: max, offset: offset, corp:"Moz"}, function(data) {
    //
    //     console.log(data)
    //     console.log(data[0])
    //     // <480 mobile, otherwise PC
    //     vm.widthOver480 = window.innerWidth>480
    //     vm.searchPane = searchPan
    //
    //     vm.teaBasicInfoList = data;
    // });
}
