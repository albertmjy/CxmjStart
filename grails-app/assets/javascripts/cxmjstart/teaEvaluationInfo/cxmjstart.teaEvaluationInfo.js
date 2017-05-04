//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /cxmjstart/core/cxmjstart.core
//= require /cxmjstart/teaEvaluationEventInfo/cxmjstart.teaEvaluationEventInfo
//= require /cxmjstart/users/cxmjstart.users
//= require /cxmjstart/teaBasicInfo/cxmjstart.teaBasicInfo
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("cxmjstart.teaEvaluationInfo", [
    "ui.router",
    "ngResource",
    "cxmjstart.core",
    "cxmjstart.teaEvaluationEventInfo",
    "cxmjstart.users",
    "cxmjstart.teaBasicInfo"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('teaEvaluationInfo', {
            url: "/teaEvaluationInfo",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('teaEvaluationInfo.list', {
            url: "",
            templateUrl: "/cxmjstart/teaEvaluationInfo/list.html",
            controller: "TeaEvaluationInfoListController as vm"
        })
        .state('teaEvaluationInfo.create', {
            url: "/create",
            templateUrl: "/cxmjstart/teaEvaluationInfo/create.html",
            controller: "TeaEvaluationInfoCreateController as vm"
        })
        .state('teaEvaluationInfo.edit', {
            url: "/edit/:id",
            templateUrl: "/cxmjstart/teaEvaluationInfo/edit.html",
            controller: "TeaEvaluationInfoEditController as vm"
        })
        .state('teaEvaluationInfo.show', {
            url: "/show/:id",
            templateUrl: "/cxmjstart/teaEvaluationInfo/show.html",
            controller: "TeaEvaluationInfoShowController as vm"
        });
}
