//= wrapped

angular
    .module("cxmjstart.users")
    .controller("UsersCreateController", UsersCreateController);

function UsersCreateController(Users, $state) {

    var vm = this;
    
    vm.users = new Users();
    
    vm.saveUsers = function() {
        vm.errors = undefined;
        vm.users.$save({}, function() {
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
