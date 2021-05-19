// function forception(people, alphabet) {
//     let arr = []
//     let newArr = []
//     for(let i = 0 ; i < people.length; i++) {
//         arr.push(people[i])
//         for(let j = 0; j < 1; j++) {
//             newArr.push(arr[i].concat(alphabet))
//         }
//     }
//     return newArr
// }
// console.log(forception(people, alphabet))




let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
let alphabet = "abcdefghijklmnopqrstuvwxyz"

let upperCaseAlphabet = alphabet.toUpperCase()

let alphabetArray = upperCaseAlphabet.split("")


const forception = (people, alphabetArray) => {
    let newArr = []
    for(let i = 0 ; i < people.length; i++) {
        newArr.push(people[i] + ":")
        for(let j = 0; j < alphabetArray.length; j++) {
            newArr.push(alphabetArray[j])
        }
    }
    return newArr
}
console.log(forception(people, alphabetArray))