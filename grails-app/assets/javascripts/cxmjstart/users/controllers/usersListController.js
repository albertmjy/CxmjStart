//= wrapped

angular
    .module("cxmjstart.users")
    .controller("UsersListController", UsersListController);

function UsersListController(Users) {
    var vm = this;

    var max = 10, offset = 0;

    Users.list({max: max, offset: offset}, function(data) {
        vm.usersList = data;
    });
}
