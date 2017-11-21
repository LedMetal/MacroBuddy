//var userProfile_JSON = window.localStorage.getItem("userProfile");

//var userProfile = JSON.parse(userProfile_JSON);

//console.log(userProfile);

var userProfile = {
    gender: "Male",
    bmr: 1800,
    tdee: 2900,
    fitnessGoal: "Lose Weight",
    dca: 2400,
    macroRatio_Protein: 45,
    macroRatio_Carbohydrates: 20,
    macroRatio_Fats: 35,
    protein: 250,
    carbohydrate: 150,
    fat: 75
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
    $('#bmrResult')[0].innerHTML = "<span style='font-size: 20px;'><strong>" + userProfile.bmr.toFixed(2) + " kCal</strong></span>";

    // Display TDEE Result
    $('#tdeeResult')[0].innerHTML = "<span style='font-size: 20px'><strong>" + userProfile.tdee.toFixed(2) + " kCal</strong></span>";

    // Display Fitness Goal
    $('#fitnessGoal')[0].innerHTML = "<span style='font-size: 20px'><strong>" + userProfile.fitnessGoal + "</strong></span>";

    // Display DCA Result
    $('#dailyCaloricAllowance')[0].innerHTML = "<span style='font-size: 20px'><strong>" + userProfile.dca.toFixed(2) + " kCal</strong></span>";

    Chart.defaults.global.defaultFontColor = "white";

    // Calories Per Gram Horizontal Bar Graph
    var ctx_caloriesPerGram = $('#caloriesPerGram');
    var caloriesPerGramChart = new Chart(ctx_caloriesPerGram, {
        type: "horizontalBar",
        data: {
            labels: ["Protein", "Carbohydrates", "Fats"],
            datasets: [{
                label: "Calories Per Gram",
                data: [4, 4, 9],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Calories per Gram (kCal)"
                    },
                    display: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    // MacroRatios Breakdown Pie Graph
    var ctx_macroBreakdown = $('#macroBreakdown');
    var macroBreakdownChart = new Chart(ctx_macroBreakdown, {
        type: "pie",
        data: {
            labels: ["Protein", "Carbohydrates", "Fats"],
            datasets: [{
                label: "Macronutrient Ratios",
                data: [userProfile.macroRatio_Protein, userProfile.macroRatio_Carbohydrates, userProfile.macroRatio_Fats],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    display: false
                }]
            }
        }
    });

    // MacroBuddy Personal Results Bar Graph
    var ctx_macroBuddyResults = $('#macroBuddyResults');
    var macroBuddyResultsChart = new Chart(ctx_macroBuddyResults, {
        type: "bar",
        data: {
            labels: ["Protein", "Carbohydrates", "Fats"],
            datasets: [{
                label: "MacroBuddy Results",
                data: [userProfile.protein.toFixed(2), userProfile.carbohydrate.toFixed(2), userProfile.fat.toFixed(2)],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "Daily Intake (g)"
                    },
                    display: true,
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    display: true
                }]
            }
        }
    });

});
