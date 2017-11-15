// Create AngularJS module and controller
var myApp = angular.module('myApp', ['ngComboDatePicker'])
    .controller('mainController', ['$scope', function($scope) {
        $scope.question = 1;
        $scope.months = "January, February, March, April, May, June, July, August, September, October, November, December";
        $scope.progBar_current = 0;

        // Go to the next question (ng-Click function on button)
        $scope.nextQuestion = function() {
            $scope.question++;
            $scope.progBar_current += (100 / 7);
            $scope.rounded = $scope.progBar_current.toFixed(0);

            switch ($scope.question) {
                case 2:     // Gender
                    $('#trGender')[0].style.display = '';

                    $('#trInputName')[0].style.display = 'none';
                    $('#trInputGender')[0].style.display = '';

                    break;
                case 3:     // Age
                    $('#trAge')[0].style.display = '';

                    $('#trInputGender')[0].style.display = 'none';
                    $('#trInputAge')[0].style.display = '';

                    break;
                case 4:     // Height
                    $('#trHeight')[0].style.display = '';

                    $('#trInputAge')[0].style.display = 'none';
                    $('#trInputHeight')[0].style.display = '';

                    break;
                case 5:     // Weight
                    $('#trWeight')[0].style.display = '';

                    $('#trInputHeight')[0].style.display = 'none';
                    $('#trInputWeight')[0].style.display = '';

                    break;
                case 6:     // Activity Factor
                    $('#trActivityFactor')[0].style.display = '';

                    $('#trInputWeight')[0].style.display = 'none';
                    $('#trInputAF')[0].style.display = '';

                    break;
                case 7:     // Fitness Goal
                    $('#trFitnessGoal')[0].style.display = '';

                    $('#trInputAF')[0].style.display = 'none';
                    $('#trInputFG')[0].style.display = '';

                    break;
                case 8:     // Questions Finished
                    $('#divInputTable').slideUp();

                    break;
            }
        };

        // User Profile
        $scope.userProfile = {
            name: "",
            gender: "",
            age: "",
            height: "",
            weight: "",
            activityFactory: "",
            fitnessGoal: ""
        };
    }]);
