const createSquence = () => {
    let arr = [];

    let start = Math.floor(Math.random() * 50) + 1;
    let interval = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < 5; i++) {
        arr.push(start.toString());
        start += interval;
    }

    console.log(arr);
    return arr;
}

let game_info = {
    questionNum: 1,
    right: 0,
    wrong: 0,
    percent: 0,
    currentAnswer: "",
    checkAnwer: false,
}

const display = () => {
    let arr = createSquence();


    let hidden_idx = Math.floor(Math.random() * 5);
    let hidden_num = arr[hidden_idx];
    game_info.currentAnswer = hidden_num;
    arr[hidden_idx] = "__";

    const sequence = document.getElementById("sequence_box");
    const right = document.getElementById("correct");
    const wrong = document.getElementById("wrong");
    const percent = document.getElementById("percent");
    const questionNum = document.getElementById("qn");
    
    // display data brought from game_info
    questionNum.innerHTML = `${game_info.questionNum}`;
    right.innerHTML = `${game_info.right}`;
    wrong.innerHTML = `${game_info.wrong}`;

    // get percentage
    const rightPercent = Math.floor(game_info.right * 100 / game_info.questionNum);
    percent.innerHTML = `${rightPercent}%`
    sequence.innerHTML = `${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]} ${arr[4]}`;
}

const checkAnswer = () => {
    // If a user already checked the answer

    if (game_info.checkAnwer) {
        alert("You already check the answer!");
        return;
    }

    let isRight = false;

    const txt = document.getElementById("input").value;
    if (txt === "") {
        alert("Please do not move on without an answer.");
        document.getElementById("input").focus();
        return;
    }

    if (!Number.isInteger(parseInt(txt))) {
        alert("Please answer with a number.");
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        return;
    }

    if (txt === game_info.currentAnswer) {
        console.log("RIGHT!!");
        game_info.right += 1;
        isRight = true;
    }
    else {
        console.log("WRONG..");
        game_info.wrong += 1;
    }

    if (isRight) {
        const right = document.getElementById("correct");
        right.innerHTML = game_info.right;
    }
    else {
        const wrong = document.getElementById("wrong");
        wrong.innerHTML = game_info.wrong;
    }
    // indicate that the user already checked the answer.
    game_info.checkAnwer = true;
    document.getElementById("input").disabled = true;

    const percent = document.getElementById("percent");
    const rightPercent = Math.floor(game_info.right * 100 / game_info.questionNum);
    percent.innerHTML = `${rightPercent}%`
}

const newProblem = () => {
    if (!game_info.checkAnwer) {
        alert("Please solve this problem before moving on.");
        document.getElementById("input").focus();
        return;
    }

    console.log(game_info);
    if (game_info.questionNum + 1 <= 10) {
        game_info.questionNum += 1;
        document.getElementById("input").value = "";
        document.getElementById("input").focus();
        // display a new problem
        display();
        game_info.checkAnwer = false;
        document.getElementById("input").disabled = false;
    }
    else {
        alert("You have reached Question No.10! Please Restart.");
        location.reload();
    }
}

display();