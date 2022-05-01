
//Create ship class w/constructor
class Ship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
// const btnPlay = document.querySelector('#btn')

// btnPlay.addEventListener('click', promptFunction)


// function promptFunction() {
//     let player = prompt("Please enter your name", " ");
//     if (player != null) {

//         document.getElementById("demo").innerHTML =
//             "Hello " + player + " Let play!";
//         window.open(game.html)
//     }
// }

    // Method to calc accuracy of hit
    hitAccuracy() {
        return this.accuracy >= Math.random();}

    // GameOver is hull less than 0
    gameOver() { return this.hull <= 0; }

    shipAttack(enemy) {
        if (this.hitAccuracy()) {
            enemy.hull -= this.firepower;

            let shipAttackText = `<br>${this.name} shot ${enemy.name} Hull: ${enemy.hull} \n `;

            return shipAttackText;
        } else {
            return `${this.name} missed target!`;
        }
    }
}

const heroShip = new Ship('USS Schwarzenegger', 20, 5, .7);
const alienShip = [];
const attackText = document.getElementById("idBattleText");

const enableBtns = () => {
    document.getElementById("attackButton").addEventListener('click', attack);
    document.getElementById("retreatButton").addEventListener('click', retreat);

}


const disableBtns = () => {
    document.getElementById("attackButton").removeEventListener('click', attack);
    document.getElementById("retreatButton").removeEventListener('click', retreat);

}

const pushText = (text) => {
    attackText.innerHTML += text;
}

const reset = () => {

    disableBtns();
    enableBtns();


    attackText.innerHTML = "<br> You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Battle the aliens as you try to destroy them with your lasers.";


    heroShip.hull = 20;


    alienShip.splice(0, alienShip.length);


    const random = Math.floor(Math.random() * 6) + 5;
    for (let i = 0; i < 6; i++) {
        let hull = Math.floor(Math.random() * 4) + 3; //Hull is 3-6
        let firepower = Math.floor(Math.random() * 3) + 2; //Firepower is 2-4
        let accuracy = (Math.floor(Math.random() * 3) + 6) / 10; //Accuracy is 0.6-0.8
        alienShip.push(new Ship("Alien Ship" + (i + 1), hull, firepower, accuracy));
    }
}

const getStatus = () => {
    let temp = `<br>${heroShip.name}<br>Hull - ${heroShip.hull}<br>Firepower - ${heroShip.firepower}<br>Accuracy - ${heroShip.accuracy}<br>`;

    for (let alien of alienShip) {
        temp += `<br>${alien.name}<br>Hull - ${alien.hull}<br>Firepower - ${alien.firepower}<br>Accuracy - ${alien.accuracy}<br>`
    }
    pushText(temp);
}

const retreat = () => {
    pushText("\n GAME OVER!");
    disableBtns();
}

const win = () => {

    if (heroShip.gameOver()) {
        pushText("\nUSS Schwarzenegger GAME OVER!!! Alien beat you!!!");
        disableBtns();
    }

    if (alienShips.length == 0) {
        pushText("\nUSS Schwarzenegger you WON!.");
        disableBtns();
    }
}

const attack = () => {


    while (!heroShip.gameOver() && !alienShip[0].gameOver()) {


        pushText(heroShip.shipAttack(alienShip[0]));


        if (!alienShip[0].gameOver()) {
            pushText(alienShip[0].shipAttack(heroShip));

        } else {
            pushText("<br>You destroyed " + alienShip[0].name + " !<br>");
        }
    }
    alienShip.shift();


    winCheck();
}




document.getElementById("resetButton").addEventListener("click", reset, false);

// const btnPlay = document.querySelector('#btn')

// btnPlay.addEventListener('click', promptFunction)


// function promptFunction() {
//     let player = prompt("Please enter your name", " ");
//     if (player != null) {

//         document.getElementById("demo").innerHTML =
//             "Hello " + player + " Let play!";
//         window.open(game.html)
//     }
// }
reset();



