// Updates the placeholder text inside an empty height input field
var updateHeightPlaceholder = function() {
    var radioHeight = $("[name = 'radioHeight']");
    var inputHeight = $("#inputHeight")[0];

    if (radioHeight[0].checked) {
        inputHeight.placeholder = "{inches}";
    } else if (radioHeight[1].checked) {
        inputHeight.placeholder = "{centimeters}";
    }

    // Remove the 'readonly' tag from the height input field
    $("#inputHeight").removeAttr("readonly");
}

// Updates the placeholder text inside an empty weight input field
var updateWeightPlaceholder = function() {
    var radioWeight = $("[name = 'radioWeight']");
    var inputWeight = $("#inputWeight")[0];

    if (radioWeight[0].checked) {
        inputWeight.placeholder = "{pounds}";
    } else if (radioWeight[1].checked) {
        inputWeight.placeholder = "{kilograms}";
    }

    // Remove the 'readonly' tag from the weight input field
    $("#inputWeight").removeAttr("readonly");
}

// Updates the description text next to the amount of exercise select menu
var updateAmountOfExerciseDescription = function() {
    var selectAmountOfExercise = $("#selectAmountOfExercise")[0];
    var amountOfExerciseDescription = $("#amountOfExerciseDescription")[0];

    switch (selectAmountOfExercise.options[selectAmountOfExercise.selectedIndex].value) {
        case "Sedentary":
            amountOfExerciseDescription.innerHTML = "<center>Little to no exercise per week</center>";

            break;
        case "Lightly Active":
            amountOfExerciseDescription.innerHTML = "<center>Light exercise 1-3 days per week</center>";

            break;
        case "Moderately Active":
            amountOfExerciseDescription.innerHTML = "<center>Moderate exercise 3-5 days per week</center>";

            break;
        case "Very Active":
            amountOfExerciseDescription.innerHTML = "<center>Heavy exercise 6-7 days per week</center>";

            break;
        case "Extremely Active":
            amountOfExerciseDescription.innerHTML = "<center>Very heavy exercise 2 times per day</center>";

            break;
        default:
            amountOfExerciseDescription.innerHTML = "";

            break;
    }
}

// Verify a legal input for Name
var nameVerification = function(name) {
    if (/^[a-zA-Z]+[-]?[a-zA-Z]+[ ]?[a-zA-Z]+[-]?[a-zA-Z]+$/.test(name)) {
        return true;
    } else {
        alert("Please enter a valid name (eg. Abdul-Rahman Sadiq)");

        $("#inputName")[0].focus();
        return false;
    }
}

// Verify a legal input for Gender
var genderVerification = function(gender) {
    if (gender != "") {
        return true;
    } else {
        alert("Please select a gender from the pull down menu");

        $("#selectGender")[0].focus();
        return false;
    }
}

// Verify a legal input for Age
var ageVerification = function(age) {
    if (/^[0-9]+$/.test(age)) {
        return true;
    } else {
        alert("Please enter a valid age (digits only; 0 - 9)");

        $("#inputAge")[0].focus();
        return false;
    }
}

// Verify a legal input for Height
var heightVerification = function(height) {
    if (/^[0-9]+[\.]?[0-9]+$/.test(height)) {
        var radioHeight = $("[name = 'radioHeight']");

        if (!((!radioHeight[0].checked) && (!radioHeight[1].checked))) {
            // Check if the height is <= 0
            if (height > 0) {
                return true;

            } else {
                alert("Please enter a valid height (greater than zero)");

                $("#inputHeight")[0].focus();
                return false;
            }
        } else {
            alert("Please select either (inches) or (centimeters) for Height");

            $("#inputHeight")[0].focus();
            return false;
        }
    } else {
        alert("Please enter a valid height (digits only)");

        $("#inputHeight")[0].focus();
        return false;
    }
}

// Converts the height input to inches (if needed)
var toInches = function(height) {
    if ($("[name = 'radioHeight']")[1].checked) {
        return height * 0.393701;
    } else {
        return height;
    }
}

// Verify a legal input for Weight
var weightVerification = function(weight) {
    if (/^[0-9]+[\.]?[0-9]+$/.test(weight)) {
        var radioWeight = $("[name = 'radioWeight']");

        if (!((!radioWeight[0].checked) && (!radioWeight[1].checked))) {
            // Check if the weight is <= 0
            if (weight > 0) {
                return true;

            } else {
                alert("Please enter a valid weight (greater than zero)");

                $("#inputWeight")[0].focus();
                return false;
            }
        } else {
            alert("Please select either (pounds) or (kilograms) for Weight");

            $("#inputWeight")[0].focus();
            return false;
        }
    } else {
        alert("Please enter a valid weight (digits only)");

        $("#inputWeight")[0].focus();
        return false;
    }
}

// Converts the weight input to pounds (if needed)
var toPounds = function(weight) {
    if ($("[name = 'radioWeight']")[1].checked) {
        return weight * 2.20462;
    } else {
        return weight;
    }
}

// Verify a legal input for Activity Factor
var activityFactorVerification = function(activityFactor) {
    if (activityFactor != "") {
        return true;
    } else {
        alert("Please select the amount of exercise that most resembles your current lifestyle");

        $('#selectAmountOfExercise').focus();
        return false;
    }
}

// Returns the corresponding value of the activity factor
var findActivityFactor = function(activityFactor) {
    switch (activityFactor) {
        case "Sedentary":
            return 1.2;
        case "Lightly Active":
            return 1.375;
        case "Moderately Active":
            return 1.55;
        case "Very Active":
            return 1.725;
        case "Extremely Active":
            return 1.9;
    }
}

// Verify a legal input for Fitness Goal
var fitnessGoalVerification = function(fitnessGoal) {
    if (fitnessGoal != "") {
        return true;
    } else {
        alert("Please select the fitness goal that you have");

        $('#selectFitnessGoal').focus();
        return false;
    }
}

// Calculate BMR
var calculateBMR = function(gender, weight, height, age) {
    if (gender == "Male") {
        return 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    } else if (gender == "Female") {
        return 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
}

// Calculate Protein
var calculateProtein = function(fitnessGoal, weight) {
    switch (fitnessGoal) {
        case "Weight Loss":
            return 1.0 * weight;

            break;
        case "Maintain":
            return 1.2 * weight;

            break;
        case "Mass Gain":
            return 1.5 * weight;

            break;
    }
}

// Function called onClick of button
var createProfile = function() {
    var _name = $('#inputName')[0].value;
    var _gender = $('#selectGender')[0].value;
    var _age = $('#inputAge')[0].value;
    var _height = $('#inputHeight')[0].value;
    var _weight = $('#inputWeight')[0].value;
    var _activityFactor = $('#selectAmountOfExercise')[0].value;
    var _fitnessGoal = $('#selectFitnessGoal')[0].value;

    // Validate all input
    if (nameVerification(_name) && genderVerification(_gender) && ageVerification(_age) && heightVerification(_height) && weightVerification(_weight) && activityFactorVerification(_activityFactor) && fitnessGoalVerification(_fitnessGoal)) {
        // Create userProfile object
        var userProfile = {
            name: _name,
            gender: _gender,
            age: _age,
            height: toInches(_height),
            weight: toPounds(_weight),
            activityFactor: findActivityFactor(_activityFactor),
            fitnessGoal: _fitnessGoal,
            bmr: calculateBMR(_gender, toPounds(_weight), toInches(_height), _age),
            protein: calculateProtein(_fitnessGoal, toPounds(_weight))
        }

        // Calculate TDEE
        userProfile.tdee = userProfile.bmr * userProfile.activityFactor;

        // Calculate Daily Calories Goal
        switch (userProfile.fitnessGoal) {
            case "Weight Loss":
                userProfile.dailyCalories = userProfile.tdee - 500;

                break;
            case "Maintain":
                userProfile.dailyCalories = userProfile.tdee;

                break;
            case "Mass Gain":
                userProfile.dailyCalories = userProfile.tdee + 500;

                break;
        }

        // Calculate Protein, Fat and Carbohydate Allowances
        userProfile.fat = 0.4 * userProfile.weight;
        userProfile.carbohydrate = (userProfile.dailyCalories - ((userProfile.protein * 4) + (userProfile.fat * 9))) / 4;

        // Stringify userProfile object
        var userProfile_JSON = JSON.stringify(userProfile);
        // Set localStorage for userProfile_JSON
        localStorage.setItem("userProfile", userProfile_JSON);

        // DEBUG - Display userProfile in browser console
        console.log(userProfile);
    }
}

// jQuery document.ready function
$(function() {
    // Checks if fields have been blurred empty (left focus without input)
    $('#inputName, #selectGender, #inputAge, #selectAmountOfExercise, #selectFitnessGoal').blur(function() {
        if ($(this).val() == "") {
            $(this).css('border', 'solid 1px red');
        } else {
            $(this).css('border', 'none');
        }
    });

});
