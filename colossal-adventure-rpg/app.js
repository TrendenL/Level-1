var readline = require("readline-sync");

//PLAYER
let player = {
    name: '',
    hp: 100,
    inventory: []
}

const weapon = () => {
    const power = ["Dragon Fist", "Kamehameha", "Spirit Bomb"];
    let randomPower = randomNum(0, 2);
    let newPower = power[randomPower];
    return newPower;
}

const attackPower = attackPow => {
    attackPow = randomNum(1, 50);
    return attackPow;
}

const playerHealth = () => {
    player.hp = player.hp - attackPower();
    return player.hp;
}

var charPower = Math.floor((Math.random() * 10) + 1)

//GREETING
const greeting = readline.keyIn("Hello, are you ready to play! Press any key to begin. ");
    var name = readline.question("What is your name? ");
    player.name = name;
    console.log("Hello " + name + "!" + " Your journey begins...");


//ENEMY
let enemy = {
    hp: 100
}

const enemies = () => {
    const enemy = ["Frieza", "Andriods", "Cell", "Majin Buu"];
    let randomEnemy = randomNum(0, 3);
    let namedEnemy = enemy[randomEnemy];
    return namedEnemy;
}

const enemyHealth = () => {
    enemy.hp = enemy.hp - attackPower();
    return enemy.hp;
}

const enemyAttack = () => {
    while (enemy.hp > 0) {
        enemyAttack();
    }
}

let enemyPower = Math.floor((Math.random() * 10) + 1)

//RANDOM ACTION
const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//INVENTORY
const checkInventory = () => {
    console.log(`${player}`);
}

const prizes= () => {
    const prize = ["Senzu Bean", "Z Sword", "Dragon Balls"];
    let randomPrize = randomNum(0, 2);
    let newPrize = prize[randomPrize];
    player.inventory.push(newPrize);
    return newPrize;
}

//GAME
const doesEnemyAppear = () => {
    return Math.floor((Math.random() * 3) + 1) === 2
}

const run = () => {
    runAway = Math.floor((Math.random() * 2) + 1)
    if (runAway === 1) {
        console.log("Wasted. Try again")
    } else {
        console.log("Keep fighting warrior!")
    }
}

const fight = () => {
    enemyPower = Math.floor((Math.random() * 10) + 1)
    charPower = Math.floor((Math.random() * 10) + 1)
    if (charPower < enemyPower) {
        console.log("Wasted. Try again") 
    } else {
        console.log("You choose to attack with " + weapon() + "\n\nthe enemy has " + enemyHealth() + " You have " + playerHealth() + " left and won a " + prizes() + "\n")
    }
}

while (player.hp > 0) {
    let action = readline.question("Press 'w' to walk or 'i' to check inventory ").toLowerCase();
    if (action === 'i') {
        console.log(player)
    } else if (action === 'w' && doesEnemyAppear()) {
        let attack = readline.question("You have encountered " + enemies() + " Press 'a' to attack or 'r' to run.")
        if (attack === 'a') {
            fight()
        } else {
            run()
        }
    }
}
