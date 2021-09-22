let calendar = {
    cur_year: new Date().getFullYear(),
    cur_month: new Date().getMonth(),
};

const setDate = () => new Date();

// get day = sun: 0 - sat: 6 || so today is wed: 3
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

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
                    <div class="cell first" id="cell${day_id}">
                        <div class="day">${day_id + 1}</div>
                        <div class="todo"></div>
                    </div>`;
                    ++day_id;
                    ++cell_count;
                    continue;
                }
                else if (j === 0) {
                    html_string += `
                    <div class="cell first">
                        <div class="day"></div>
                        <div class="todo"></div>
                    </div>`;
                    ++cell_count;
                    continue;
                }
                // put cell id
                if (j >= start_day) {
                    html_string += `
                    <div class="cell" id="cell${day_id}">
                        <div class="day">${day_id + 1}</div>
                        <div class="todo"></div>
                    </div>`;
                    ++day_id;
                    ++cell_count;
                    continue;
                }
                // do not put cell id
                html_string += `
                    <div class="cell">
                        <div class="day"></div>
                        <div class="todo"></div>
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
                        <div class="day">${day_id + 1}</div>
                        <div class="todo"></div>
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
                        <div class="day"></div>
                        <div class="todo"></div>
                    </div>`
                    ++cell_count;
                    continue;
                }
                html_string += `
                <div class="cell" id="cell${day_id}">
                    <div class="day">${day_id + 1}</div>
                    <div class="todo"></div>
                </div>`;
                ++day_id;
                ++cell_count;
            }
            html_string += `</div>`
        }

    }

    console.log(start_day);

    console.log(html_string);
    const body_body = document.querySelector(".body-body");
    body_body.innerHTML = html_string;
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