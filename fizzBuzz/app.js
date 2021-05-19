fizzBUzz = (value1, value2) => {
    for (let i = 0; i <= 100; i++) {
        if (i % value1 === 0 && i % value2 === 0) {
            console.log('FizzBuzz')
        } else if (i % value1 === 0) {
            console.log('Fizz')
        } else if (i % value2 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBUzz(3, 5)