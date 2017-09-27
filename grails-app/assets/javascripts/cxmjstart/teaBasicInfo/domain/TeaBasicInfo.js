//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.teaBasicInfo")
    .factory("TeaBasicInfo", TeaBasicInfo);

function TeaBasicInfo($resource, domainListConversion, domainConversion) {
    var TeaBasicInfo = $resource(
        "teaBasicInfo/:id/:search/:filter",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", cache: true, isArray: true, transformResponse: [angular.fromJson, domainListConversion("UnitLabel", "unitLabel", "domainConversion")]},

            // added by albert
          "search": {method: "GET", params:{search: "search"}, isArray: true, transformResponse: [angular.fromJson, domainListConversion("UnitLabel", "unitLabel", "domainConversion")]},
            "filter": {method: "GET", params:{filter: "filter"}, isArray: true, transformResponse: [angular.fromJson, domainListConversion("UnitLabel", "unitLabel", "domainConversion")]},

         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("UnitLabel", "unitLabel")]}}
    );

    TeaBasicInfo.list = TeaBasicInfo.query;

    TeaBasicInfo.prototype.toString = function() {
        return 'cxmjstart.TeaBasicInfo : ' + (this.id ? this.id : '(unsaved)');
    };

    // albert, move it all to database latter
    TeaBasicInfo.categoryList = ["生普", "熟普"]
    TeaBasicInfo.regionList = ["景洪", "大理", "保山", "临沧", "勐腊", "勐海", "普洱", "拼配"]

    return TeaBasicInfo;
}
