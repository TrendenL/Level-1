var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

let indexOrange = fruit.indexOf("orange")
console.log(indexOrange)

fruit.push(indexOrange)
console.log(fruit)

let vegetablesLength = vegetables.length
console.log(vegetablesLength)

vegetables.push(vegetablesLength)
console.log(vegetables)

let food = fruit.concat(vegetables)
console.log(food)

food.splice(4, 2)
console.log(food)

food.reverse()
console.log(food)

let joinedFood = food.join()
console.log(joinedFood)