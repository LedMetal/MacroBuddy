// Create AngularJS module and controller
var myApp = angular.module('myApp', ['ngComboDatePicker'])
    .controller('mainController', ['$scope', function($scope) {
        $scope.question = 1;
        $scope.months = "January, February, March, April, May, June, July, August, September, October, November, December";

        // Go to the next question (ng-Click function on button)
        $scope.nextQuestion = function() {
            $scope.question++;

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

                    break;
                case 8:     // Questions Finished

                    break;
            }
        };

        // User Profile
        $scope.userProfile = {
            name: "",
            gender: "",
            age: new Date('2012-08-03'),
            height: "",
            weight: "",
            activityFactory: "",
            fitnessGoal: ""
        };
    }]);
