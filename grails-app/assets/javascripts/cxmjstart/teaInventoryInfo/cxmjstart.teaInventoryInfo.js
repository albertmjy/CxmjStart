//= wrapped
//= require /angular/angular 
//= require /angular/angular-ui-router
//= require /angular/angular-resource
//= require /cxmjstart/core/cxmjstart.core
//= require /cxmjstart/unitLabel/cxmjstart.unitLabel
//= require /cxmjstart/teaBasicInfo/cxmjstart.teaBasicInfo
//= require_self
//= require_tree services
//= require_tree controllers
//= require_tree directives
//= require_tree domain
//= require_tree templates

angular.module("cxmjstart.teaInventoryInfo", [
    "ui.router",
    "ngResource",
    "cxmjstart.core",
    "cxmjstart.unitLabel",
    "cxmjstart.teaBasicInfo"
]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('teaInventoryInfo', {
            url: "/teaInventoryInfo",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('teaInventoryInfo.list', {
            url: "",
            templateUrl: "/cxmjstart/teaInventoryInfo/list.html",
            controller: "TeaInventoryInfoListController as vm"
        })
        .state('teaInventoryInfo.create', {
            url: "/create",
            templateUrl: "/cxmjstart/teaInventoryInfo/create.html",
            controller: "TeaInventoryInfoCreateController as vm"
        })
        .state('teaInventoryInfo.edit', {
            url: "/edit/:id",
            templateUrl: "/cxmjstart/teaInventoryInfo/edit.html",
            controller: "TeaInventoryInfoEditController as vm"
        })
        .state('teaInventoryInfo.show', {
            url: "/show/:id",
            templateUrl: "/cxmjstart/teaInventoryInfo/show.html",
            controller: "TeaInventoryInfoShowController as vm"
        });
}
