//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.teaEvaluationEventInfo")
    .factory("TeaEvaluationEventInfo", TeaEvaluationEventInfo);

function TeaEvaluationEventInfo($resource) {
    var TeaEvaluationEventInfo = $resource(
        "teaEvaluationEventInfo/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    TeaEvaluationEventInfo.list = TeaEvaluationEventInfo.query;

    TeaEvaluationEventInfo.prototype.toString = function() {
        return 'cxmjstart.TeaEvaluationEventInfo : ' + (this.id ? this.id : '(unsaved)');
    };

    return TeaEvaluationEventInfo;
}
