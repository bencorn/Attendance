(function () {

    "use strict";

    // Retrieving inventory module
    angular.module("attendance")
        .controller("attendanceController", attendanceController);

    // code for controller itself
    function attendanceController($http, $scope) {

        var vm = this;

        vm.Message = "";
        vm.Problems = [];
        vm.Responses = [];

        $(function () {
            $('.section.dropdown').dropdown('set selected', 'B1');
            $('.filter.dropdown').dropdown('set selected', '5');

            if (vm.Admin === true) {
                LoadProblems();
            }

            if (vm.Admin !== true) {
                LoadProblems();
                setTimeout(function(){
                    $(".prob.owl").owlCarousel({
                        singleItem: true
                    });
                }, 1000);
                hljs.initHighlightingOnLoad();

            }


        })

        vm.Message = "";

        $('.ui.progress').progress({
            total: 30
        });

        $scope.$watch('vm.Section', function () {
            if (vm.Admin === true) {
                var payload = { Section: vm.Section };

                $http.post('https://www.inviodev.com/api/problems/responses', payload)
                .then(function successCallback(response) {
                    vm.Responses = JSON.parse(response.data);

                    $('.ui.progress').progress({
                        percent: vm.Responses.length
                    });
                }, function errorCallback(response) {

                });
            }

        });

        //var t = setInterval(SaveChanges, 10000);

        function LoadProblems() {
            $http.get('https://www.inviodev.com/api/problems')
            .then(function (response) {
                vm.Problems = JSON.parse(response.data);
            });
        };

        vm.AddNewProblem = function () {
            vm.Problems.push({ ProblemTitle: "", ProblemDescription: "", ProblemId: Math.random() });
        }

        vm.RemoveProblem = function (ProblemId) {
            vm.Problems = vm.Problems.filter(function (item) {
                return item.ProblemId !== ProblemId;
            });

            if (ProblemId >= 1) {
                $http.post("https://www.inviodev.com/api/problems/delete", { ProblemId: ProblemId });
            }
        };

        vm.SaveChanges = function () {
            $.blockUI({ message: '<div class="ui active dimmer"><div class="ui loader"></div></div>' });
            for (var i = 0; i < vm.Problems.length; i++) {
                if (vm.Problems[i].ProblemId < 1) {
                    vm.Problems[i].ProblemId = 0;
                }
            }

            $http.post("https://www.inviodev.com/api/problems/save", { Problems: vm.Problems })
            .then(function (response) {
                LoadProblems();
                $.unblockUI();
            });
        }

        vm.CheckIn = function () {
            var payload = {Section: vm.Section, BUId: vm.BUId, Problems: vm.Problems };
            $.blockUI({ message: '<div class="ui active dimmer"><div class="ui loader"></div></div>' });
            $http.post("https://www.inviodev.com/api/problems/submit", payload)
            .then(function successCallback(response) {
                $.unblockUI();
                $('.ui.stacked.segment').slideUp();
                vm.Message = "You're all set! We've checked you in :)";
                vm.BUId = "";
            }, function errorCallback(response) {
                $.unblockUI();
                vm.Message = "";
            });
        };       
    }

})();