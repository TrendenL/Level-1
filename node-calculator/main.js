const readlineSync = require("readline-sync")

let userNumber1 = readlineSync.question('May I have your first number? ');

let userNumber2 = readlineSync.question('May I have your second number? ');

let userOperator = readlineSync.question('Enter the operator to perform? ');

if(userOperator === "add"){
    function addNumber(num1, num2){
        return +num1 + +num2
    }
    let addResult = addNumber(userNumber1, userNumber2)
     console.log("The result is: " + addResult)
} else if (userOperator === "sub"){
    function subNumber(num1, num2){
        return num1 - num2
    }
    let subResult = subNumber(userNumber1, userNumber2)
     console.log("The result is: " + subResult)
} else if (userOperator === "mul"){
    function mulNumber(num1, num2){
        return num1 * num2
    }
    let mulResult = mulNumber(userNumber1, userNumber2)
    console.log("The result is: " + mulResult)
} else if (userOperator === "div"){
    function divNumber(num1, num2){
        return num1 / num2
    }
    let divResult = divNumber(userNumber1, userNumber2)
    console.log("The result is: " + divResult)
}
