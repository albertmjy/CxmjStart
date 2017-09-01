//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.teaEvaluationEventInfo")
    .factory("TeaEvaluationEventInfo", TeaEvaluationEventInfo);

function TeaEvaluationEventInfo($resource, domainListConversion, domainToManyConversion) {
    var TeaEvaluationEventInfo = $resource(
        "teaEvaluationEventInfo/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("Users", "users", "domainToManyConversion"), domainListConversion("TeaBasicInfo", "teaBasicInfo", "domainToManyConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainToManyConversion("Users", "users"), domainToManyConversion("TeaBasicInfo", "teaBasicInfo")]}}
    );

    TeaEvaluationEventInfo.list = TeaEvaluationEventInfo.query;

    TeaEvaluationEventInfo.prototype.toString = function() {
        return 'cxmjstart.TeaEvaluationEventInfo : ' + (this.id ? this.id : '(unsaved)');
    };

    return TeaEvaluationEventInfo;
}
