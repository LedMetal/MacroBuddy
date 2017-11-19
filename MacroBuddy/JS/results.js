//var userProfile_JSON = window.localStorage.getItem("userProfile");

//var userProfile = JSON.parse(userProfile_JSON);

//console.log(userProfile);

var userProfile = {
    gender: "Male",
    bmr: 1800,
    tdee: 2900,
    fitnessGoal: "Lose Weight",
    dca: 2400
};

// jQuery document ready function
$(function() {
    // Display appropriate BMR formula
    if (userProfile.gender == "Male") {
        $('#bmrFormula')[0].innerHTML = "66 + (6.23 x <strong>weight (lbs)</strong>) + (12.7 x <strong>height (inch)</strong>) - (6.8 x <strong>age</strong>)";

    } else {
        $('#bmrFormula')[0].innerHTML = "655 + (4.35 x <strong>weight (lbs)</strong>) + (4.7 x <strong>height (inch)</strong>) - (4.7 x <strong>age</strong>)";
    }

    // Display BMR Result
    $('#bmrResult')[0].innerHTML = "<span style='font-size: 20px;'><strong>" + userProfile.bmr + " kCal</strong></span>";

    // Display TDEE Result
    $('#tdeeResult')[0].innerHTML = "<span style='font-size: 20px'><strong>" + userProfile.tdee + " kCal</strong></span>";

    // Display Fitness Goal
    $('#fitnessGoal')[0].innerHTML = "<span style='font-size: 20px'><strong>" + userProfile.fitnessGoal + " </strong></span>";

    // Display DCA Result
    $('#dailyCaloricAllowance')[0].innerHTML = "<span style='font-size: 20px'><strong>" + userProfile.dca + " </strong></span>";

});
