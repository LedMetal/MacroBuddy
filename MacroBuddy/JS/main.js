// Calculate BMR
var calculateBMR = function(gender, weight, height, age) {
    if (gender == "Male") {
        return 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    } else if (gender == "Female") {
        return 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
}

// Calculate TDEE
var calculateTDEE = function(bmr, activityFactor) {
    return bmr * activityFactor;
}

// Calculate Daily Calories Goal
var calculateDailyCalories = function(fitnessGoal, tdee) {
    switch (fitnessGoal) {
        case "Weight Loss":
            return tdee - 500;

            break;
        case "Maintain":
            return tdee;

            break;
        case "Mass Gain":
            return tdee + 500;

            break;
    }
}

// Calculate Protein Allowance
var calculateProtein = function(fitnessGoal, dailyCalories) {
    switch (fitnessGoal) {
        case "Weight Loss":
            return (0.45 * dailyCalories) / 4;

            break;
        case "Maintain":
            return (0.3 * dailyCalories) / 4;

            break;
        case "Mass Gain":
            return (0.3 * dailyCalories) / 4;

            break;
    }
}

// Calculate Fat Allowance
var calculateFat = function(fitnessGoal, dailyCalories) {
    switch (fitnessGoal) {
        case "Weight Loss":
            return (0.35 * dailyCalories) / 9;

            break;
        case "Maintain":
            return (0.3 * dailyCalories) / 9;

            break;
        case "Mass Gain":
            return (0.2 * dailyCalories) / 9;

            break;
    }
}

// Calculate Carbohydrate Allowance
var calculateCarb = function(fitnessGoal, dailyCalories) {
    switch (fitnessGoal) {
        case "Weight Loss":
            return (0.2 * dailyCalories) / 4;

            break;
        case "Maintain":
            return (0.4 * dailyCalories) / 4;

            break;
        case "Mass Gain":
            return (0.5 * dailyCalories) / 4;

            break;
    }
}

// Function called ng-Click of button
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
            fitnessGoal: _fitnessGoal
        }
        userProfile.bmr = calculateBMR(userProfile.gender, userProfile.weight, userProfile.height, userProfile.age);
        userProfile.tdee = userProfile.bmr * userProfile.activityFactor;
        userProfile.dailyCalories = calculateDailyCalories(userProfile.fitnessGoal, userProfile.tdee);
        userProfile.protein = calculateProtein(userProfile.fitnessGoal, userProfile.dailyCalories);
        userProfile.fat = calculateFat(userProfile.fitnessGoal, userProfile.dailyCalories);
        userProfile.carbohydrate = calculateCarb(userProfile.fitnessGoal, userProfile.dailyCalories);

        // Stringify userProfile object
        var userProfile_JSON = JSON.stringify(userProfile);
        // Set localStorage for userProfile_JSON
        localStorage.setItem("userProfile", userProfile_JSON);

        // Navigate to results page
        window.location.href = "../HTML/results.html";

        // DEBUG - Display userProfile in browser console
        console.log(userProfile);
    }
}

// jQuery document.ready function
$(function() {
    // Create hover event on button, changing background-color
    $('#btnEnter').hover(function() {
        $(this).css("background-color", "lightgrey");
    }, function() {
        $(this).css("background-color", "");
        });

    $('#tbName').focus();
});
