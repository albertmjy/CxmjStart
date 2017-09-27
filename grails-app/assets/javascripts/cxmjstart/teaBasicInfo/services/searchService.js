//= wrapped
// @Deprecate
angular
    .module("cxmjstart.teaBasicInfo")
    .factory("searchService", searchService);

function searchService($http, TeaBasicInfo) {
    var showSearch = true

    // // sample 1
    // return function(max, offset){
    //     _max = max, _offset = offset
    //     return {
    //         quickFilter: quickFilter,
    //         fullFilter: fullFilter
    //     }
    // }
    // // sample 2
    // return {
    //     init: function (max, offset) {
    //         _max = max, _offset = offset
    //         return {
    //             quickFilter: quickFilter,
    //             fullFilter: fullFilter
    //         }
    //     }
    // }


    return {
        dataModle: {},
        show : false,
        showFilter: function () {
            this.show = true
            // console.log(listSearchService.get())
        },
        hideFilter: function () {
            this.show = false
        },
        reset: function(){
            this.dataModle = {}
        },
        search: function (searchMap) {
            // remove the empty items
            for (var key in searchMap){
                if (!searchMap[key].trim()){
                    delete searchMap[key]
                    console.log("Parameter (" + key + ") was deleted since the value is empty ")
                }
            }
            this.hideFilter()
            return (TeaBasicInfo.search(searchMap))
        }


    };
}