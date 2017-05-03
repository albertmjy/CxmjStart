//= wrapped
//= require /angular/angular-resource

angular
    .module("cxmjstart.users")
    .factory("Users", Users);

function Users($resource) {
    var Users = $resource(
        "users/:id",
        {"id": "@id"},
        {"update": {method: "PUT"},
         "query": {method: "GET", isArray: true},
         "get": {method: 'GET'}}
    );

    Users.list = Users.query;

    Users.prototype.toString = function() {
        return 'cxmjstart.Users : ' + (this.id ? this.id : '(unsaved)');
    };

    return Users;
}
