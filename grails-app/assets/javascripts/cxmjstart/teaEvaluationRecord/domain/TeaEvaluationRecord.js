//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.teaEvaluationRecord")
    .factory("TeaEvaluationRecord", TeaEvaluationRecord);

function TeaEvaluationRecord($resource) {
    var TeaEvaluationRecord = $resource(
        "teaEvaluationRecord/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    TeaEvaluationRecord.list = TeaEvaluationRecord.query;

    TeaEvaluationRecord.prototype.toString = function() {
        return 'cxmjstart.TeaEvaluationRecord : ' + (this.id ? this.id : '(unsaved)');
    };

    return TeaEvaluationRecord;
}
