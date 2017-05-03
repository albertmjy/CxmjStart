//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.unitLabel")
    .factory("UnitLabel", UnitLabel);

function UnitLabel($resource) {
    var UnitLabel = $resource(
        "unitLabel/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    UnitLabel.list = UnitLabel.query;

    UnitLabel.prototype.toString = function() {
        return 'cxmjstart.UnitLabel : ' + (this.id ? this.id : '(unsaved)');
    };

    return UnitLabel;
}
