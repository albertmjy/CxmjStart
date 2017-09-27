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

angular.module("cxmjstart.geoInfo", ["ui.router", "ngResource", "cxmjstart.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('geoInfo', {
            url: "/geoInfo",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('geoInfo.list', {
            url: "",
            templateUrl: "/cxmjstart/geoInfo/list.html",
            controller: "GeoInfoListController as vm"
        })
        .state('geoInfo.create', {
            url: "/create",
            templateUrl: "/cxmjstart/geoInfo/create.html",
            controller: "GeoInfoCreateController as vm"
        })
        .state('geoInfo.edit', {
            url: "/edit/:id",
            templateUrl: "/cxmjstart/geoInfo/edit.html",
            controller: "GeoInfoEditController as vm"
        })
        .state('geoInfo.show', {
            url: "/show/:id",
            templateUrl: "/cxmjstart/geoInfo/show.html",
            controller: "GeoInfoShowController as vm"
        });
}
