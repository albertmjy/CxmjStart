//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.teaInventoryInfo")
    .factory("TeaInventoryInfo", TeaInventoryInfo);

function TeaInventoryInfo($resource, domainListConversion, domainConversion) {
    var TeaInventoryInfo = $resource(
        "teaInv/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("UnitLabel", "unitLabel", "domainConversion"), domainListConversion("TeaBasicInfo", "teaBasicInfo", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("UnitLabel", "unitLabel"), domainConversion("TeaBasicInfo", "teaBasicInfo")]}}
    );

    TeaInventoryInfo.list = TeaInventoryInfo.query;

    TeaInventoryInfo.prototype.toString = function() {
        return 'cxmjstart.TeaInventoryInfo : ' + (this.id ? this.id : '(unsaved)');
    };

    return TeaInventoryInfo;
}
