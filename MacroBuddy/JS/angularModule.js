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
                    $('#question')[0].innerHTML = "What is your <strong>gender</strong>?";

                    $('#trInputName')[0].style.display = 'none';
                    $('#trInputGender')[0].style.display = '';

                    $('#trGender')[0].style.display = '';
                    $('#cbGender').focus();
                    break;
                case 3:     // Age
                    $('#question')[0].innerHTML = "What is your <strong>date of birth</strong>?";

                    $('#trInputGender')[0].style.display = 'none';
                    $('#trInputAge')[0].style.display = '';

                    $('#trAge')[0].style.display = '';
                    $('#tbDate').focus();
                    break;
                case 4:     // Height
                    $('#question')[0].innerHTML = "What is your <strong>height</strong>?";

                    $('#trHeight')[0].style.display = '';

                    $('#trInputAge')[0].style.display = 'none';
                    $('#trInputHeight')[0].style.display = '';

                    $('#cbFeet').focus();
                    break;
                case 5:     // Weight
                    $('#question')[0].innerHTML = "What is your <strong>weight (lbs)</strong>?";

                    $('#trWeight')[0].style.display = '';

                    $('#trInputHeight')[0].style.display = 'none';
                    $('#trInputWeight')[0].style.display = '';

                    $('#tbWeight').focus();
                    break;
                case 6:     // Activity Factor
                    $('#question')[0].innerHTML = "What is your <strong>level of activity</strong>?";

                    $('#trActivityFactor')[0].style.display = '';

                    $('#trInputWeight')[0].style.display = 'none';
                    $('#trInputAF')[0].style.display = '';

                    $('#cbActivityFactor').focus();
                    break;
                case 7:     // Fitness Goal
                    $('#question')[0].innerHTML = "What are your <strong>fitness goals</strong>?";

                    $('#trFitnessGoal')[0].style.display = '';

                    $('#trInputAF')[0].style.display = 'none';
                    $('#trInputFG')[0].style.display = '';

                    $('#cbFitnessGoal').focus();
                    break;
                case 8:     // Questions Finished
                    $('#question')[0].innerHTML = "That's all! Click <strong>Go MacroBuddy!</strong> to get your reesults!";

                    $('#divInputTable').slideUp();

                    $('#divProgBar').slideUp();
                    $('#divGo')[0].style.display = '';

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

        // Name Verification
        $scope.nameVerification = function(name) {
            if (name != null) {
                if (/^[a-zA-Z]+[-]?[a-zA-Z]+[ ]?[a-zA-Z]+[-]?[a-zA-Z]+$/.test(name)) {
                    $scope.userProfile.name = name;
                    $scope.nextQuestion();
                } else {
                    alert("Please enter a valid name (eg. Abdul-Rahman Sadiq)");
                    $('#tbName').focus();
                }
            } else {
                alert("Please enter a name in the given field");
                $('#tbName').focus();
            }
        };

        // Gender Verification
        $scope.genderVerification = function(gender) {
            if (gender != null) {
                $scope.userProfile.gender = gender;
                $scope.nextQuestion();
            } else {
                alert("Please select a gender from the pull down menu");
                $('#cbGender').focus();
            }
        };

        // Age Verification
        $scope.calculateAge = function(birthday) {
            if (birthday != null) {
                var today = new Date();
                var difference = Math.floor((today - birthday) / (1000 * 3600 * 24 * 365));

                $scope.userProfile.age = difference;
                $scope.nextQuestion();
            } else {
                alert("Please enter your birthday in the given field");
                $('#tbDate').focus();
            }
        };

        // Height Verification
        $scope.heightVerification = function(feet, inches) {
            if ((feet == null) || (inches == null)) {
                alert("Please fill in both fields for your height in feet and inches");
            } else {
                $scope.userProfile.height = (feet * 12) + inches;
                $scope.nextQuestion();
            }
        };

        // Weight Verification
        $scope.weightVerification = function(weight) {
            if (weight != null) {
                if (/^[0-9]+[\.]?[0-9]+$/.test(weight)) {
                    $scope.userProfile.weight = weight;
                    $scope.nextQuestion();
                } else {
                    alert("Please enter a valid weight in the given field");
                    $("#tbWeight")[0].focus();
                }
            } else {
                alert("Please enter your weight (in lbs) in the given field");
                $('#tbWeight').focus();
            }
        };

        // Activity Factor Verification
        $scope.activityFactorVerification = function(activityFactor) {
            if (activityFactor != null) {
                $scope.userProfile.activityFactor = activityFactor;
                $scope.nextQuestion();
            } else {
                alert("Please select the amount of exercise that most resembles your current lifestyle");
                $('#cbActivityFactor').focus();
            }
        };

        // Fitness Goal Verification
        $scope.fitnessGoalVerification = function(fitnessGoal) {
            if (fitnessGoal != null) {
                $scope.userProfile.fitnessGoal = fitnessGoal;
                $scope.nextQuestion();
            } else {
                alert("Please select the fitness goal that you have");
                $('#cbFitnessGoal').focus();
            }
        };

    }]);
