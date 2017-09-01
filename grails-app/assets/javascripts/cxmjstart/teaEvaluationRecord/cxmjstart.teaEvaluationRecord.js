//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /cxmjstart/core/cxmjstart.core
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("cxmjstart.teaEvaluationRecord", ["ui.router", "ngResource", "cxmjstart.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('teaEvaluationRecord', {
            url: "/teaEvaluationRecord",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('teaEvaluationRecord.list', {
            url: "",
            templateUrl: "/cxmjstart/teaEvaluationRecord/list.html",
            controller: "TeaEvaluationRecordListController as vm"
        })
        .state('teaEvaluationRecord.create', {
            url: "/create",
            templateUrl: "/cxmjstart/teaEvaluationRecord/create.html",
            controller: "TeaEvaluationRecordCreateController as vm"
        })
        .state('teaEvaluationRecord.edit', {
            url: "/edit/:id",
            templateUrl: "/cxmjstart/teaEvaluationRecord/edit.html",
            controller: "TeaEvaluationRecordEditController as vm"
        })
        .state('teaEvaluationRecord.show', {
            url: "/show/:id",
            templateUrl: "/cxmjstart/teaEvaluationRecord/show.html",
            controller: "TeaEvaluationRecordShowController as vm"
        });
}
