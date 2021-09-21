<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project 5 - PHP Form Level 1-</title>
    <link href="style.css" rel="stylesheet">

    <?php
    if(isset($_POST['SubmitButton'])) { // Check if form was submitted

        // fist name
        $fName = $_POST['fName'];
        // last name
        $lName = $_POST['lName'];

        $user_name = "User's full name: $fName $lName\n";
        // email
        $email = $_POST['email'];
        // phone
        $phone = $_POST['phone'];

        // personal address
        $personal_info = "User's personal info:";
        $phoneP = "Phone: $phone";
        $emailE = "Email: $email";
        
        // city
        $city = $_POST['city'];
        // address
        $address = $_POST['address'];
        // zip 
        $zip = $_POST['zip'];
        // state
        $state = $_POST['state'];
        // citizen
        $citizen = $_POST['citizen'] ==  "citizen" ? "a US citizen" : "not a US citizen";
        $personal_address = "User's address:";
        $cityC = "City: $city";
        $streetS = "Street Address: $address";
        $zipZ = "Zip Code: $zip";
        $stateS = "State: $state";
        $citizenC = "This user is $citizen";
        // gender
        $gender = $_POST['gender'];
        $user_gender = "This user is $gender";
        // school
        $school = $_POST['school'];
        $user_school = "This user is a $school";

        // interests
        $sports = $_POST['sports'] == "sports" ? "sports" : "";
        $art = $_POST['art'] == "art" ? "art" : "";
        $others = $_POST['others'] == "others" ? "others" : "";

        $user_interest = "This user's interest is $sports $art $others";

    }
    ?>
</head>

<body>
<section>
    <form action="#" method="post">
        <!-- User info -->
        <div class="row">
            <label for="fname">First name:</label> <input type="text" id="fname" name="fName">
        </div>
        <div class="row">
            <label for="lname">Last name:</label> <input type="text" id="lname" name="lName">
        </div>
        <div class="row">
            <label for="email">Email:</label> <input type="email" id="email" name="email">
        </div>
        <div class="row">
            <label for="phone">Phone:</label> <input type="text" id="phone" name="phone">
        </div>
        <div class="row">
            <label for="address">Address:</label> <input type="text" id="address" name="address">
        </div>
        <div class="row">
            <label for="city">City:</label> <input type="text" id="city" name="city">
        </div>
        <div class="row">
            <label for="zip">Zip Code:</label> <input type="text" id="zip" name="zip">
        </div>
        <!-- State select -->
        <div class="box">
            <label for="state-select">State:</label>
            <select id="sel" name="state">
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
            </select>
        </div>
        <!-- Citizen checkbox -->
        <div class="box">
            <input type="checkbox" id="citizen" name="citizen" value="citizen">US Citizen?
        </div>
        <!-- Gender -->
        <div class="box">
            <label for="gender">Gender:</label>
            <input type="radio" id="femlae" name="gender" value="Female">
            <label for="female">Female</label> 
            <input type="radio" id="male" name="gender" value="Male">
            <label for="male">Male</label>
        </div>
        <!-- School Year -->
        <div class="box">
            <label for="gender">School Year:</label>
            <input type="radio" id="fresh" name="school" value="freshman">
            Freshman
            <input type="radio" id="sopho" name="school" value="sophomore">
            Sophomore
            <input type="radio" id="junior" name="school" value="junior">
            Junior
            <input type="radio" id="senior" name="school" value="senior">
            Senior
        </div>
        <!-- Interests -->
        <div class="box">
            <label for="interest">Interests?</label>
            <input type="checkbox" id="sport" name="sports" value="sports">Sports
            <input type="checkbox" id="art" name="art" value="art">Art
            <input type="checkbox" id="others" name="others" value="others">Others
        </div>
        <br>
        <button value="Submit" name="SubmitButton">Submit</button>
</form> 
</section>

<?php echo $user_name; 
echo "<br>";
echo $personal_info;
echo "<br>";
echo $emailE;
echo "<br>";
echo $phoneP;
echo "<br>";
echo $personal_address;
echo "<br>";
echo $cityC;
echo "<br>";
echo $streetS;
echo "<br>";
echo $stateS;
echo "<br>";
echo $citizenC;
echo "<br>";
echo $user_gender;
echo "<br>";
echo $user_school;
echo "<br>";
echo $user_interest;
?>
</body>