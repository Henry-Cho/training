<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project 8 - Calendar-</title>
    <link rel="stylesheet" href="style.css?v=<?php echo time(); ?>">
    <script src="index.js" defer></script>
</head>
<body onload="display()">
        <div class="input">
            <span>Appointment Title: </span><input type="text" name="title">
            <span>Appointment Time: </span><input type="text" name="time">
            <span>Appointment Location: </span><input type="text" name="location">
            <button>Submit</button>
        </div>
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