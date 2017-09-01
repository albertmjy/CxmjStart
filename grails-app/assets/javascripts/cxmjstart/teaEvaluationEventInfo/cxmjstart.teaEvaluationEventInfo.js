//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /cxmjstart/core/cxmjstart.core
//= require /cxmjstart/users/cxmjstart.users
//= require /cxmjstart/teaBasicInfo/cxmjstart.teaBasicInfo
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("cxmjstart.teaEvaluationEventInfo", [
    "ui.router",
    "ngResource",
    "cxmjstart.core",
    "cxmjstart.users",
    "cxmjstart.teaBasicInfo"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('teaEvaluationEventInfo', {
            url: "/teaEvaluationEventInfo",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('teaEvaluationEventInfo.list', {
            url: "",
            templateUrl: "/cxmjstart/teaEvaluationEventInfo/list.html",
            controller: "TeaEvaluationEventInfoListController as vm"
        })
        .state('teaEvaluationEventInfo.create', {
            url: "/create",
            templateUrl: "/cxmjstart/teaEvaluationEventInfo/create.html",
            controller: "TeaEvaluationEventInfoCreateController as vm"
        })
        .state('teaEvaluationEventInfo.edit', {
            url: "/edit/:id",
            templateUrl: "/cxmjstart/teaEvaluationEventInfo/edit.html",
            controller: "TeaEvaluationEventInfoEditController as vm"
        })
        .state('teaEvaluationEventInfo.show', {
            url: "/show/:id",
            templateUrl: "/cxmjstart/teaEvaluationEventInfo/show.html",
            controller: "TeaEvaluationEventInfoShowController as vm"
        });
}
