//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.teaBasicInfo")
    .factory("TeaBasicInfo", TeaBasicInfo);

function TeaBasicInfo($resource, domainListConversion, domainConversion) {
    var TeaBasicInfo = $resource(
        "teaBasicInfo/:id/:search",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("UnitLabel", "unitLabel", "domainConversion")]},

            // added by albert
          "search": {method: "GET", params:{search: "search"}, isArray: true, transformResponse: [angular.fromJson, domainListConversion("UnitLabel", "unitLabel", "domainConversion")]},

         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("UnitLabel", "unitLabel")]}}
    );

    TeaBasicInfo.list = TeaBasicInfo.query;

    TeaBasicInfo.prototype.toString = function() {
        return 'cxmjstart.TeaBasicInfo : ' + (this.id ? this.id : '(unsaved)');
    };

    return TeaBasicInfo;
}
