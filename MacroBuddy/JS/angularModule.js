// Create AngularJS module and controller
var myApp = angular.module('myApp', ['ngComboDatePicker'])
    .controller('mainController', ['$scope', '$log', function($scope, $log) {
        $scope.$log = $log;
        $scope.question = 1;
        $scope.months = "January, February, March, April, May, June, July, August, September, October, November, December";
        $scope.progBar_current = 0;

        // User Profile
        $scope.userProfile = {
            name: "",
            gender: "",
            age: 0,
            height: 0,
            weight: 0,
            activityFactor: 0,
            fitnessGoal: ""
        };

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

                // Check if age falls between 16-50
                if (difference >= 16 && difference <= 50) {
                    $scope.userProfile.age = difference;
                    $scope.nextQuestion();
                } else {
                    alert("The age range applicable for MacroBuddy's advice is ages 16-50. Please consult a physician or nutritionist for more information.");
                    $('#tbDate').focus();
                }

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
                $scope.userProfile.height = (parseInt(feet) * 12) + parseInt(inches);
                $scope.nextQuestion();
            }
        };

        // Weight Verification
        $scope.weightVerification = function(weight) {
            if (weight != null) {
                if (/^[0-9]+[\.]?[0-9]+$/.test(weight)) {
                    $scope.userProfile.weight = parseInt(weight);
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
                $scope.userProfile.activityFactor = parseFloat(activityFactor);
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
                $scope.setMacroRatios(fitnessGoal);
                $scope.nextQuestion();
            } else {
                alert("Please select the fitness goal that you have");
                $('#cbFitnessGoal').focus();
            }
        };

        // Set MacroRatios According to Fitness Goal
        $scope.setMacroRatios = function(fitnessGoal) {
            switch (fitnessGoal) {
                case "Lose Weight":
                    $scope.userProfile.macroRatio_Protein = parseFloat(0.45);
                    $scope.userProfile.macroRatio_Carbohydrates = parseFloat(0.20);
                    $scope.userProfile.macroRatio_Fats = parseFloat(0.35);

                    break;
                case "Maintain":
                    $scope.userProfile.macroRatio_Protein = parseFloat(0.30);
                    $scope.userProfile.macroRatio_Carbohydrates = parseFloat(0.40);
                    $scope.userProfile.macroRatio_Fats = parseFloat(0.30);

                    break;
                case "Mass Gain":
                    $scope.userProfile.macroRatio_Protein = parseFloat(0.30);
                    $scope.userProfile.macroRatio_Carbohydrates = parseFloat(0.50);
                    $scope.userProfile.macroRatio_Fats = parseFloat(0.20);

                    break;
            }
        };

        // Function called on ng-Click of btnGoMB
        $scope.goMacroBuddy = function() {
            $scope.userProfile.bmr = $scope.calculateBMR();
            $scope.userProfile.tdee = $scope.calculateTDEE();
            $scope.userProfile.dailyCalories = $scope.calculateDailyCalories();
            $scope.userProfile.protein = $scope.calculateProtein();
            $scope.userProfile.fat = $scope.calculateFat();
            $scope.userProfile.carbohydrate = $scope.calculateCarb();

            // Stringify userProfile object
            var userProfile_JSON = JSON.stringify($scope.userProfile);

            // Set localStorage for userProfile_JSON
            window.localStorage.setItem("userProfile", userProfile_JSON);

            // Navigate to results page
            window.location.href = "../HTML/results.html";
        };

        $scope.calculateBMR = function() {
            if ($scope.userProfile.gender == "Male") {
                return 66 + (6.23 * $scope.userProfile.weight) + (12.7 * $scope.userProfile.height) - (6.8 * $scope.userProfile.age);
            } else if ($scope.userProfile.gender == "Female") {
                return 655 + (4.35 * $scope.userProfile.weight) + (4.7 * $scope.userProfile.height) - (4.7 * $scope.userProfile.age);
            }
        };

        $scope.calculateTDEE = function() {
            return $scope.userProfile.bmr * $scope.userProfile.activityFactor;
        };

        $scope.calculateDailyCalories = function() {
            switch ($scope.userProfile.fitnessGoal) {
                case "Lose Weight":
                    return $scope.userProfile.tdee - 500;

                    break;
                case "Maintain":
                    return $scope.userProfile.tdee;

                    break;
                case "Mass Gain":
                    return $scope.userProfile.tdee + 500;

                    break;
            }
        };

        $scope.calculateProtein = function() {
            return ($scope.userProfile.macroRatio_Protein * $scope.userProfile.dailyCalories) / 4;
        };

        $scope.calculateFat = function() {
            return ($scope.userProfile.macroRatio_Fats * $scope.userProfile.dailyCalories) / 9;
        };

        $scope.calculateCarb = function() {
            return ($scope.userProfile.macroRatio_Carbohydrates * $scope.userProfile.dailyCalories) / 4;
        };

    }]);
