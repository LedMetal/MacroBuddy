<?php
    // This file contains sensitive information, therefore not included in GitHub repo
    // It contains the definition for connectToDB()
    include "database.php";

    $conn = connectToDB();
    
    // _POST Variables
    $name = $_POST["name"];
    $genderID = getGenderID($conn);
    $age = $_POST["age"];
    $height = $_POST["height"];
    $weight = $_POST["weight"];
    $activityFactorID = getActivityFactorID($conn);
    $fitnessGoalID = getFitnessGoalID($conn);
    $bmr = $_POST["bmr"];
    $tdee = $_POST["tdee"];
    $dailyCalories = $_POST["dailyCalories"];
    $macroRatio_Carbohydrates = $_POST["macroRatio_Carbohydrates"];
    $macroRatio_Fats = $_POST["macroRatio_Fats"];
    $macroRatio_Protein = $_POST["macroRatio_Protein"];
    $protein = $_POST["protein"];
    $fat = $_POST["fat"];
    $carbohydrate = $_POST["carbohydrate"];

    // SQL Query
    $query = "INSERT INTO Profile VALUES (null, '$name', 'abdulsadiq@hotmail.com', $genderID, $age, $height, $weight, $activityFactorID, $fitnessGoalID, $bmr, $tdee, $dailyCalories, $macroRatio_Carbohydrates, $macroRatio_Fats, $macroRatio_Protein, $carbohydrate, $fat, $protein)";
    $result = $conn->query($query);

    if ($result) {
        echo "New entry recorded succesfully";
    } else {
        echo "Error: " . $query . ": " . $conn->error;
    }

    mysqli_close($conn);

    
    /*----------------------------------------------------------------------------------*/

    // Returns the GenderID corresponding to the selected Type
    function getGenderID($conn) {
        $gender = $_POST["gender"];

        $query = "SELECT GenderID FROM Gender WHERE Type = '$gender'";
        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                return $row["GenderID"];
            }
        } else {
            return null;
        }
    }

    // Returns the ActivityFactorID corresponding to the selected Factor
    function getActivityFactorID($conn) {
        $activityFactor = $_POST["activityFactor"];

        $query = "SELECT ActivityFactorID FROM ActivityFactor WHERE Factor = '$activityFactor'";
        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                return $row["ActivityFactorID"];
            }
        } else {
            return null;
        }
    }

    // Returns the FitnessGoalID corresponding to the selected Goal
    function getFitnessGoalID($conn) {
        $fitnessGoal = $_POST["fitnessGoal"];

        $query = "SELECT FitnessGoalID FROM FitnessGoal WHERE Goal = '$fitnessGoal'";
        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                return $row["FitnessGoalID"];
            }
        } else {
            return null;
        }
    }

?>
