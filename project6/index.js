// random number generator
let random_start = Math.floor(Math.random() * 50) + 1;

const game = document.querySelector(".game");

let nodeList = game.querySelectorAll(".block");

for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML = random_start;
    random_start += 2;
}

game.addEventListener('click', (e) => {
    if (e.target.className === "block") {
        console.log(e.target.id);
        let target = game.querySelector(`#${e.target.id}`);
        let newNode = document.createElement('div');
        newNode.classList.add("bomb");
        let lastPositionX = window.getComputedStyle(target).getPropertyValue("top");
        let lastPositionY = window.getComputedStyle(target).getPropertyValue("left");
        console.log(lastPositionX, lastPositionY);
        newNode.style.top = lastPositionX;
        newNode.style.left = lastPositionY;
        game.insertBefore(newNode, target);
        console.log(newNode);
        target.style.display = 'none';
    }
})
