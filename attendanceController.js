(function () {

    "use strict";

    // Retrieving inventory module
    angular.module("attendance")
        .controller("attendanceController", attendanceController);

    // code for controller itself
    function attendanceController($http) {

        var vm = this;
        vm.Message = "";

        vm.CheckIn = function () {
            var payload = {Section: vm.Section, BUId: vm.BUId, SecretCode: vm.SecretCode };

            $http.post("https://www.inviodev.com/api/attendance/checkin", payload)
            .then(function successCallback(response) {
                vm.Message = response.data;
            }, function errorCallback(response) {
                vm.Message = response.data;
            });
        };
        

    }

})();