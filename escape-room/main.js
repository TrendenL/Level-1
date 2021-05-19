const readlineSync = require('readline-sync')

let userChoice = readlineSync.question('You have three options: Put hand in hole, Find the key, or Open door? ');
if(userChoice === "Put hand in hole"){
    console.log("You died!")
} else if(userChoice === "Find the key"){
    console.log("You escpaed!")
} else {
    console.log("Door not open!")
}