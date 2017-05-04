//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.teaEvaluationInfo")
    .factory("TeaEvaluationInfo", TeaEvaluationInfo);

function TeaEvaluationInfo($resource, domainListConversion, domainConversion) {
    var TeaEvaluationInfo = $resource(
        "teaEva/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true, transformResponse: [angular.fromJson, domainListConversion("TeaEvaluationEventInfo", "teaEvaluationEventInfo", "domainConversion"), domainListConversion("Users", "user", "domainConversion"), domainListConversion("TeaBasicInfo", "teaBasicInfo", "domainConversion")]},
         "get": {method: 'GET', transformResponse: [angular.fromJson, domainConversion("TeaEvaluationEventInfo", "teaEvaluationEventInfo"), domainConversion("Users", "user"), domainConversion("TeaBasicInfo", "teaBasicInfo")]}}
    );

    TeaEvaluationInfo.list = TeaEvaluationInfo.query;

    TeaEvaluationInfo.prototype.toString = function() {
        return 'cxmjstart.TeaEvaluationInfo : ' + (this.id ? this.id : '(unsaved)');
    };

    return TeaEvaluationInfo;
}
