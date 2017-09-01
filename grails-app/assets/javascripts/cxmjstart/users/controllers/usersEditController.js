//= wrapped

angular
    .module("cxmjstart.users")
    .controller("UsersEditController", UsersEditController);

function UsersEditController(Users, $stateParams, $state) {
    var vm = this;

    

    Users.get({id: $stateParams.id}, function(data) {
        vm.users = new Users(data);
    }, function() {
        vm.errors = [{message: "Could not retrieve users with ID " + $stateParams.id}];
    });

    vm.updateUsers = function() {
        vm.errors = undefined;
        vm.users.$update(function() {
            $state.go('users.show', {id: vm.users.id});
        }, function(response) {
            var data = response.data;
            if (data.hasOwnProperty('message')) {
                vm.errors = [data];
            } else {
                vm.errors = data._embedded.errors;
            }
        });
    };
}
