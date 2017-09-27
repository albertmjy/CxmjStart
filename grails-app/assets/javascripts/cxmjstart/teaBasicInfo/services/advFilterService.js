//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .factory("advFilterService", advFilterService);

function advFilterService($http, TeaBasicInfo) {
    "use strict";
    var _max, _offset
    var _fnSubmitCallback

    var FullFilter = {}

    var _showOptions = {
        main: false
    }
    function _showFilter() {
        _showOptions.main = true
    }
    function _hideFilter() {
        _showOptions.main = false
    }
    function _submit(){
        var form = document.forms["full-filter"]
        var formdata = new FormData(form)

        var params = {}
        formdata.forEach(function (v, k, arr) {
            if (v){
                params[k] = v
            }
        })

        TeaBasicInfo.filter({max: _max, offset: _offset, params: params},
            _fnSubmitCallback)

        _hideFilter()
    }

    FullFilter = {
        showOptions: _showOptions,
        showFilter: _showFilter,
        hideFilter: _hideFilter,
        submit: _submit
    }

    return function (max, offset, fnSubmitCallback) {
        _max = max, _offset = offset
        _fnSubmitCallback = fnSubmitCallback
        return FullFilter
    }

}
