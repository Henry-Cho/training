let calendar = {
    cur_year: new Date().getFullYear(),
    cur_month: new Date().getMonth(),
};

const holidays = {
    0: {1: "New Year's Day"},
    1: {15: "Presidents' Day"},
    2: {17: "St. Patrick's Day"},
    3: {19: "Patriots' Day"},
    4: {9: "Mother's Day"},
    5: {20: "Father's Day"},
    6: {4: "Independence Day"},
    7: {4: "Barack Obama Day"},
    8: {6: "Labor Day"},
    9: {11: "Columbus Day"},
    10: {11: "Veterans Day"},
    11: {25: "Christmas"}
}

// get day = sun: 0 - sat: 6 || so today is wed: 3
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const popModal = (e) => {
//     // console.log(e);
//     // console.log(e.target.children[1]);

//     const modal_bg = document.querySelector(".modal_bg");
//     const modal = document.querySelector(".modal");
//     const modal_date = document.querySelector(".modal_date");

//     if (e.target.children[1].id === undefined) {
//         return;
//     }
//     modal_date.innerHTML = e.target.children[1].id;
//     modal_bg.style.display="block";
//     modal.style.display = "block";
    
// }

const display = () => {
    const cur_month = document.querySelector("#month");
    cur_month.innerHTML = `${calendar.cur_year} ${months[calendar.cur_month]}`;

    let start_day = new Date(`${months[calendar.cur_month]} 1, 2020`).getDay() + 1;

    // start > 0 total row = original (5) + 1
    // else total row = 5

    let day_id = 0;

    let html_string = ``;

    let row_num = start_day > 4 ? 6 : 5;
    let cell_limit = start_day > 4? 42: 35;
    let cell_count = 0;
    let last_date = new Date(calendar.cur_year, calendar.cur_month + 1, 0).getDate();

    // February 
    if (calendar.cur_month === 1) {
        row_num = 5;
    }

    for (let i = 0; i < row_num; i++) {
        html_string += `<div class="row">`;
        if (i === 0) {
            for (let j = 0; j < 7; j++) {
                // first cell
                if (j === 0 && j === start_day) {
                    html_string += `
                    <div class="cell" id="cell${day_id}">
                        <div class="upper">
                            <div class="day">${day_id + 1}</div>
                            <div class="holiday"></div>
                        </div>
                        <div class="todo" id="${calendar.cur_year}-${months[calendar.cur_month]}-${day_id+1}"></div>
                    </div>`;
                    ++day_id;
                    ++cell_count;
                    continue;
                }
                else if (j === 0) {
                    html_string += `
                    <div class="cell first">
                    </div>`;
                    ++cell_count;
                    continue;
                }
                // put cell id
                if (j >= start_day) {
                    html_string += `
                    <div class="cell" id="cell${day_id}">
                        <div class="upper">
                            <div class="day">${day_id + 1}</div>
                            <div class="holiday"></div>
                        </div>
                        <div class="todo" id="${calendar.cur_year}-${calendar.cur_month+1}-${day_id+1}"></div>
                    </div>`;
                    ++day_id;
                    ++cell_count;
                    continue;
                }
                // do not put cell id
                html_string += `
                    <div class="cell">
                    </div>`;
                ++cell_count;
            }
            html_string += `</div>`;
        }
        else {
            for (let j = 0; j < 7; j++) {
                if (j === 0) {
                    html_string += `
                    <div class="cell first" id="cell${day_id}">
                        <div class="upper">
                            <div class="day">${day_id + 1}</div>
                            <div class="holiday"></div>
                        </div>
                        <div class="todo" id="${calendar.cur_year}-${calendar.cur_month+1}-${day_id+1}"></div>
                    </div>`;
                    ++day_id;
                    ++cell_count;
                    continue;
                }
                if (cell_count > cell_limit) {
                    break;
                }
                if (day_id >= last_date) {
                    html_string += `
                    <div class="cell">
                    </div>`
                    ++cell_count;
                    continue;
                }
                html_string += `
                <div class="cell" id="cell${day_id}">
                    <div class="upper">
                    <div class="day">${day_id + 1}</div>
                    <div class="holiday"></div>
                    </div>
                    <div class="todo" id="${calendar.cur_year}-${calendar.cur_month+1}-${day_id+1}"></div>
                </div>`;
                ++day_id;
                ++cell_count;
            }
            html_string += `</div>`
        }

    }

    const body_body = document.querySelector(".body-body");
    body_body.innerHTML = html_string;


    const holidate = Object.keys(holidays[calendar.cur_month]) - 1;

    const holiday_cell = document.querySelector(`#cell${holidate}`);
    const holiday = document.querySelector(`#cell${holidate} .holiday`);
    holiday.classList.add("change");

    const holiday_part = document.querySelector(".change");
    holiday_cell.style.background = "#DAA49A";
    holiday_part.innerHTML = Object.values(holidays[calendar.cur_month]).join("");
}

const goPrev = () => {
    if (calendar.cur_month - 1 < 0) {
        calendar.cur_year -= 1;
        calendar.cur_month = 11;
    }
    else {
        calendar.cur_month -= 1;
    }
    display();
}

const goNext = () => {
    if (calendar.cur_month + 1 > 11) {
        calendar.cur_year += 1;
        calendar.cur_month = 0;
    }
    else {
        calendar.cur_month += 1;
    }
    display();
}

// const closeModal = () => {
//     console.log("DJDJDJD")
//     const modal_bg = document.querySelector(".modal_bg");
//     console.log(modal_bg);
//     const modal = document.querySelector(".modal");

//     modal_bg.style.display="none";
//     modal.style.display = "none";
// }