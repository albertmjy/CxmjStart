//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /cxmjstart/core/cxmjstart.core
//= require /cxmjstart/unitLabel/cxmjstart.unitLabel
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("cxmjstart.teaBasicInfo", [
    "ui.router",
    "ngResource",
    "cxmjstart.core",
    "cxmjstart.unitLabel"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('teaBasicInfo', {
            url: "/teaBasicInfo",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('teaBasicInfo.list', {
            url: "",
            templateUrl: "/cxmjstart/teaBasicInfo/list.html",
            controller: "TeaBasicInfoListController as vm"
        })
        .state('teaBasicInfo.search', {
            url: "/search",
            templateUrl: "/cxmjstart/teaBasicInfo/search.html",
            controller: "TeaBasicInfoSearchController as vm"
        })
        .state('teaBasicInfo.create', {
            url: "/create",
            templateUrl: "/cxmjstart/teaBasicInfo/create.html",
            controller: "TeaBasicInfoCreateController as vm"
        })
        .state('teaBasicInfo.edit', {
            url: "/edit/:id",
            templateUrl: "/cxmjstart/teaBasicInfo/edit.html",
            controller: "TeaBasicInfoEditController as vm"
        })
        .state('teaBasicInfo.show', {
            url: "/show/:id",
            templateUrl: "/cxmjstart/teaBasicInfo/show.html",
            controller: "TeaBasicInfoShowController as vm"
        });
}
