// Create AngularJS module and controller
var myApp = angular.module('myApp', [])
    .controller('mainController', ['$scope', function($scope) {
        $scope.question = 1;

        $scope.changeModel = function() {
            $scope.question++;
            switch ($scope.question) {
                case 1:     // Name
                    $('#tbInput').attr('ng-model', 'name');

                    break;
                case 2:     // Gender
                    $('#tbInput').attr('ng-model', 'gender');

                    break;
                case 3:     // Age
                    $('#tbInput').attr('ng-model', 'age');

                    break;
                case 4:     // Height
                    $('#tbInput').attr('ng-model', 'height');

                    break;
                case 5:     // Weight
                    $('#tbInput').attr('ng-model', 'weight');

                    break;
                case 6:     // Activity Factor
                    $('#tbInput').attr('ng-model', 'activityFactor');

                    break;
                case 7:     // Fitness Goal
                    $('#tbInput').attr('ng-model', 'fitnessGoal');

                    break;
                case 8:     // Questions Finished
                    $('#tbInput').attr('ng-model', '');

                    break;
            }
        };

        // Go to the next question (onClick function on button)
        $scope.nextQuestion = function() {
            $scope.changeModel();

            switch ($scope.question) {
                case 1:     // Name
                    $('#trName')[0].style.display = '';

                    break;
                case 2:     // Gender
                    $('#trGender')[0].style.display = '';

                    break;
                case 3:     // Age
                    $('#trAge')[0].style.display = '';

                    break;
                case 4:     // Height
                    $('#trHeight')[0].style.display = '';

                    break;
                case 5:     // Weight
                    $('#trWeight')[0].style.display = '';

                    break;
                case 6:     // Activity Factor
                    $('#trActivityFactor')[0].style.display = '';

                    break;
                case 7:     // Fitness Goal
                    $('#trFitnessGoal')[0].style.display = '';

                    break;
                case 8:     // Questions Finished

                    break;
            }
        };
    }]);
