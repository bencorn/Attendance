(function () {

    "use strict";

    // Retrieving inventory module
    angular.module("attendance")
        .controller("attendanceController", attendanceController);

    // code for controller itself
    function attendanceController($http, $scope) {

        var vm = this;

        vm.Message = "";

        $(function () {
            $('.ui.dropdown').dropdown('set selected', 'B1');

            if (vm.Admin === true) {
                $http.get("https://www.inviodev.com/api/attendance/code")
                .then(function (response) {
                    vm.SecretCode = JSON.parse(response.data);
                })
            }
        })

        $('.ui.progress').progress({
            total: 30
        });

        $scope.$watch('vm.Section', function () {
            if (vm.Admin === true) {
                var payload = { Section: vm.Section };

                $http.post('https://www.inviodev.com/api/attendance/responses', payload)
                .then(function successCallback(response) {
                    vm.Responses = JSON.parse(response.data);

                    $('.ui.progress').progress({
                        percent: vm.Responses.length
                    });
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
                    $('.ui.progress').progress({
                        percent: vm.Responses.length
                    });
                }, function errorCallback(response) {

                });
            }
        };

        vm.Message = "";

        vm.SaveCode = function () {
            var payload = { SecretCode: vm.SecretCode }
            $.blockUI({ message: '<div class="ui active dimmer"><div class="ui loader"></div></div>' });
            $http.post("https://www.inviodev.com/api/attendance/code", payload)
            .then(function () {
                $.unblockUI();
            });
        }

        vm.CheckIn = function () {
            var payload = {Section: vm.Section, BUId: vm.BUId, SecretCode: vm.SecretCode, PromptResponse: vm.PromptResponse };
            $.blockUI({ message: '<div class="ui active dimmer"><div class="ui loader"></div></div>' });
            $http.post("https://www.inviodev.com/api/attendance/checkin", payload)
            .then(function successCallback(response) {
                $.unblockUI();
                vm.Message = "You're all set! We've checked you in :)";
                vm.BUId = "";
                vm.SecretCode = "";
                vm.PromptResponse = "";
            }, function errorCallback(response) {
                vm.Message = "Oops, wrong secret code!";
                vm.SecretCode = "";
            });
        };       
    }

})();