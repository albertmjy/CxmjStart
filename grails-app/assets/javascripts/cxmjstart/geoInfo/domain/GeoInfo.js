//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.geoInfo")
    .factory("GeoInfo", GeoInfo);

function GeoInfo($resource) {
    var GeoInfo = $resource(
        "geoInfo/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    GeoInfo.list = GeoInfo.query;

    GeoInfo.prototype.toString = function() {
        return 'cxmjstart.GeoInfo : ' + (this.id ? this.id : '(unsaved)');
    };

    return GeoInfo;
}
