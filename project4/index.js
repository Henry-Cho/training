let time_info = {
    current_hour: '12',
    current_min: '00',
    current_x: 0,
    current_y: 0,
}

const clock = document.getElementById("clock");

function allowDrop(ev) {
    ev.preventDefault();
}

// change hands

// chands short hand
const changeShort = (hour) => {
    time_info.current_hour = hour;
}

// change long hand
const changeLong = (min) => {
    time_info.current_min = min;
}

// display after drag and drop
const displayAfterDrag = () => {
    const hour_hand = document.getElementById("hour");
    const min_hand = document.getElementById("min");

    hour_hand.style.transform = `rotate(${parseInt(time_info.current_hour) * 30}deg)`;
    min_hand.style.transform = `rotate(${parseInt(time_info.current_min) * 30}deg)`;
}

function drop(ev) {
    ev.preventDefault();
    const dotOwner = ev.dataTransfer.getData("text") === "hour" ? "hour" : "min";
    let x = ev.screenX;
    let y = ev.screenY;

    let target = "";

    // 12 or 6
    if (x <= 650 && x >= 610) {
        console.log("DDDD")
        // 12
        if (y < 300 && y > 230) {
            target = "12";
            console.log("GGGGG")
        }
        else if (y < 1035 && 1000 <= y) {
            target = "6";
        }
    }
    // 1 or 11
    if (y >= 280 && y < 320) {
        if (x > 410 && x < 445) {
            target = "11";
        }
        else if (x > 800 && x < 840) {
            target = "1";
        }
    }

    // 2 or 10
    if (y >= 420 && y < 460) {
        if (x >= 265 && x < 300) {
            target = "10";
        }
        else if (x >= 940 && x < 989) {
            target = "2";
        }
    }

    // 9 or 3
    if (y >= 616 && y < 640) {
        if (x >= 210 && x < 240) {
            target = "9";
        }
        else if (x >= 1004 && x < 1043) {
            target = "3";
        } 
    }

    // 8 or 4
    if (y >= 800 && y < 840) {
        if (x >= 260 && x < 304) {
            target = "8";
        }
        else if (x >= 948 && x < 988) {
            target = "4";
        }
    }

    // 7 or 5 
    if (y >= 956 && y < 1000) {
        if (x >= 415 && x < 455) {
            target = "7";
        }
        else if (x >= 809 && x < 850) {
            target = "5";
        }
    }

    if (dotOwner === "hour") {
        changeShort(target);
    }
    else {
        changeLong(target);
    }

    displayAfterDrag();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.parentNode.id);
}

const setTime = () => {
    const time = document.getElementById("input").value;
    // eliminate all the empty spaces.
    if (time.indexOf(" ") !== -1) {
        time = time.replace(/ /g, "");
    }

    if (time === "") {
        return [time_info.current_hour, time_info.current_min];
    }

    // split time to get hour & minutes, respectively
    const split_time = time.split(":");

    // change 02 -> 2, 03 -> 3
    split_time.forEach((s, idx) => {
        if (s.length === 2 && s[0] === "0") {
            split_time[idx] = s[1];
        }
    })

    let hour = split_time[0];
    let min = split_time[1];

    // If a user inserts a wrong type of hour or minutes
    if (hour.length > 2 || min.length > 2) {
        alert("Reenter the time again. Time should be ina a XX:XX form.");
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        return;
    }

    // if a user inserts a much bigger value than 59 for minutes
    if (parseInt(min) > 59) {
        alert("Careful! Minutes should be less than 60.");
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        return;
    }

    // if a user sets the hour bigger than 24
    if (parseInt(hour) > 24) {
        alert("Careful! Hour should be equal to or less than 24.");
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        return;
    }

    // if a user sets the hour bigger than 12
    if (parseInt(hour) > 12) {
        let new_hour = parseInt(hour) - 12;
        hour = new_hour.toString();
    }

    // if a user sets the hour as 00 or 0
    if (hour === "00" || hour === "0") {
        hour = "12";
    }
    
    return [hour, min];
}

const display = () => {
    const time = setTime();

    if (time === undefined) {
        return;
    }

    const hour_hand = document.getElementById("hour");
    const min_hand = document.getElementById("min");

    hour_hand.style.transform = `rotate(${parseInt(time[0]) * 30}deg)`;
    min_hand.style.transform = `rotate(${parseInt(time[1]) * 6}deg)`;

    const timeZone = document.getElementById("time");

    if (parseInt(time[0]) < 10) {
        time[0] = "0" + time[0];
    }

    if (parseInt(time[1]) < 10) {
        time[1] = "0" + time[1];
    }

    timeZone.innerHTML = `${time[0]}:${time[1]}`;
}