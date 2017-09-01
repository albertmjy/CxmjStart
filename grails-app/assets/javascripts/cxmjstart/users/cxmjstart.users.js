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

angular.module("cxmjstart.users", ["ui.router", "ngResource", "cxmjstart.core"]).config(config);

function config($stateProvider) {
    $stateProvider
        .state('users', {
            url: "/users",
            abstract: true,
            template: "<div ui-view></div>"
        })
        .state('users.list', {
            url: "",
            templateUrl: "/cxmjstart/users/list.html",
            controller: "UsersListController as vm"
        })
        .state('users.create', {
            url: "/create",
            templateUrl: "/cxmjstart/users/create.html",
            controller: "UsersCreateController as vm"
        })
        .state('users.edit', {
            url: "/edit/:id",
            templateUrl: "/cxmjstart/users/edit.html",
            controller: "UsersEditController as vm"
        })
        .state('users.show', {
            url: "/show/:id",
            templateUrl: "/cxmjstart/users/show.html",
            controller: "UsersShowController as vm"
        });
}
