(function () {

    "use strict";

    // Retrieving inventory module
    angular.module("attendance")
        .controller("attendanceController", attendanceController);

    // code for controller itself
    function attendanceController($http, $scope) {

        var vm = this;

        $(function () {
            $('.ui.dropdown').dropdown('set selected', 'B1');
        })

        var g = new JustGage({
            id: "gauge",
            value: 3,
            min: 0,
            max: 30,
            title: "Check In's"
        });

            $scope.$watch('vm.Section', function () {
                if (vm.Admin === true) {
                    var payload = { Section: vm.Section };

                    $http.post('https://www.inviodev.com/api/attendance/responses', payload)
                    .then(function successCallback(response) {
                        vm.Responses = JSON.parse(response.data);
                    }, function errorCallback(response) {

                    });
                }

            });

            var t = setInterval(LoadResponses, 1000);

            function LoadResponses() {
                if (vm.Admin === true) {
                    var payload = { Section: vm.Section };

                    $http.post('https://www.inviodev.com/api/attendance/responses', payload)
                    .then(function successCallback(response) {
                        vm.Responses = JSON.parse(response.data);
                    }, function errorCallback(response) {

                    });
                }
            };

        vm.Message = "";

        vm.CheckIn = function () {
            var payload = {Section: vm.Section, BUId: vm.BUId, SecretCode: vm.SecretCode };

            $http.post("https://www.inviodev.com/api/attendance/checkin", payload)
            .then(function successCallback(response) {
                vm.Message = "You're all set! We've checked you in :)";
                vm.BUId = "";
                vm.SecretCode = "";
            }, function errorCallback(response) {
                vm.Message = "Oops, wrong secret code!";
                vm.SecretCode = "";
            });
        };
        

    }

})();