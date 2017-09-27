//= wrapped

angular
    .module("cxmjstart.teaBasicInfo")
    .factory("filterService", filterService);

function filterService($http, TeaBasicInfo) {
    "use strict";
    var _max, _offset
    var _fnSubmitCallback

    var QuickFilter = {}

    // ================ Quick Filter ===============
    var _showOptions = {
        main: false, // main panel
        brand: false,
        unit: false,
        region: false,
    }
    var _filterOptions = ["Panel", "brand", "unit", "region"]
    var _showPanel = function (option) {
        // same option click
        if (_showOptions[_filterOptions[option]] === true){
            _showOptions.main = !_showOptions.main
            return
        }
        // diff option
        for (var k in _showOptions){
            _showOptions[k] = false
        }
        _showOptions[_filterOptions[option]] = true
        _showOptions.main = true

    }
    var _submit = function (params, callback) {
        var _callback = callback || _fnSubmitCallback
        TeaBasicInfo.filter({max: _max, offset:_offset, params: params}, _callback)
        _showOptions.main = false
    }

    var _asc = true
    var _toggleSort = function (column) {
        var orderBy = _asc?"asc":"desc";
        _asc = !_asc

        TeaBasicInfo.list({max: _max, offset: _offset, sort: column, order:orderBy}, _fnSubmitCallback);
    }

    var _clearFilter = function () {
        TeaBasicInfo.list({max: _max, offset: _offset}, _fnSubmitCallback);
    }
    QuickFilter = {
        showOptions: _showOptions,
        showPanel: _showPanel,
        submit: _submit,
        toggleSort: _toggleSort,
        clearFilter: _clearFilter
    }

    return function(max, offset, fnSubmitCallback){
        _max = max, _offset = offset
        _fnSubmitCallback = fnSubmitCallback
        return {
            QuickFilter: QuickFilter
        }
    };



}
