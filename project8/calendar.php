<?php
session_start();
// Include config file
require_once "config.php";

$app_title = $app_year = $app_month = $app_day = $app_location = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $app_title = trim($_POST["title"]);
    $app_year = trim($_POST['year']);
    $app_month = trim($_POST['month']);
    $app_day = trim($_POST['day']);
    $app_location = trim($_POST['location']);

    $logedInUsername = $_SESSION['username'];

    $sql = "INSERT INTO activity (username, title, year, month, day, location) VALUES (?,?,?,?,?,?)";

    if($stmt = mysqli_prepare($link, $sql)){
        if (false===$stmt) {
            die('Error with prepare: ') . htmlspecialchars($mysqli->error);
        }
            
        $bp = mysqli_stmt_bind_param($stmt,"ssssss", $logedInUsername ,$app_title, $app_year, $app_month, $app_day, $app_location);
        if (false===$bp) {
            die('Error with bind_param: ') . htmlspecialchars($stmt->error);
        }
            
        $bp = $stmt->execute();
        if ( false===$bp ) {
            die('Error with execute: ' . htmlspecialchars($stmt->error));
        }
        $stmt->close();
    }

    mysqli_close($link);
    header("location: calendar.php");
    exit;
}

;?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project 8 - Calendar-</title>
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <script src="index.js" defer></script>
    <scrip
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
</head>
<body onload="display()">

<script>
    let ajax = new XMLHttpRequest();
    let method = "GET";
    let url = "data.php";
    let asynchronous = true;

    console.log("HHIHIHIHI");

    ajax.open(method, url, asynchronous);

    ajax.send();

    ajax.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                let date = `${data[i].year}-${data[i].month}-${data[i].day}`;

                let cell = document.getElementById(date);

                cell.innerHTML = `
                <div>${data[i].title} & ${data[i].location}</div>
                `;
            }
        }
    }
;
</script>

    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <label>Appointment Title: </label><input type="text" name="title">
            <label>Appointment Year: </label><input type="text" name="year">
            <label>Appointment Month: </label><input type="text" name="month">
            <label>Appointment Day: </label><input type="text" name="day">
            <label>Appointment Location: </label><input type="text" name="location">
            <input type="submit" value="Submit">
            <p>Don't have an account? <a href="registration.php">Sign up now</a>.</p>
            <p>Already have an account? <a href="login.php">Login here</a>.</p>
            <a href="logout.php">Sign Out of Your Account</a>
    </form>
    <!-- <div class="modal_bg" onclick="closeModal()"></div> -->
    <!-- <div class="modal">
        <h2 class="modal_date"></h2>
        <div class="input">
            <span>Appointment Title: </span><input type="text" name="title">
            <span>Appointment Time: </span><input type="text" name="time">
            <span>Appointment Location: </span><input type="text" name="location">
        </div>
        <button>Submit</button>
        <button>Close</button>
    </div> -->
    <section class="container">
        <!-- calendar frame -->
        <div class="frame">
            <!-- calendar header -->
            <div class="cal-header">
                <span id="month"></span>
                <button id="prev" onclick="goPrev()"><</button>
                <button id="next" onclick="goNext()">></button>
            </div>
            <div class="cal-body">
                <div class="body-header">
                    <div id="sun">Sunday</div>
                    <div>Monday</div>
                    <div>Tuesday</div>
                    <div>Wednesday</div>
                    <div>Thursday</div>
                    <div>Friday</div>
                    <div>Saturday</div>
                </div>
                <div class="body-body">
                </div>
            </div>
        </div>
    </section>
</body>
</html>