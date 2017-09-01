//= wrapped

angular
    .module("cxmjstart.users")
    .controller("UsersShowController", UsersShowController);

function UsersShowController(Users, $stateParams, $state) {
    var vm = this;

    Users.get({id: $stateParams.id}, function(data) {
        vm.users = new Users(data);
    }, function() {
        $state.go('users.list');
    });

    vm.delete = function() {
        vm.users.$delete(function() {
            $state.go('users.list');
        }, function() {
            //on error
        });
    };

}
