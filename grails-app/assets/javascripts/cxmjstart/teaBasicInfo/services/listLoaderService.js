//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .factory("listLoaderService", listLoaderService);

function listLoaderService($http, TeaBasicInfo) {
    function isBottom(){
        var list = document.getElementById("list-teaBasicInfo")
        var scrollTop = document.body.scrollTop || window.pageYOffset || window.scrollTop
        var leftHeight = list.clientHeight + list.offsetTop - scrollTop

        var screenHeight = window.innerHeight || screen.availHeight

        if (leftHeight <= screenHeight){
            return true
        }else {
            return false
        }
    }
    var _remain = null, _total
    var _max, _offset

    function appendItems(data) {

    }
    function reqMoreItems() {
        TeaBasicInfo.list({max: _max, offset: _offset}, function (data, getResponseHeaders) {
            // data.headers
            if (_remain === null){
                _total = getResponseHeaders("total-count")
                _remain = _total
            }
            _remain = _total - _max

            console.log(_remain)
        })
    }
    var bottomToloadItems = function () {
        console.log(_max, _offset, _remain, _total)
        if (isBottom()){
            if (_remain===null || _remain > 0){
                reqMoreItems()
            } else {
                console.log("No more items..")
            }
        }
    }

    return {
        bottomToloadItems : function (max, offset) {
            _max = max, _offset = offset
            return bottomToloadItems
        }
    };


    // return function (max, offset) {
    //     _max = max
    //     _offset = offset
    //
    //     return {
    //         bottomToloadItems : bottomToloadItems
    //     }
    // }
}