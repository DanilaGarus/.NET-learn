// Functions

//Function Declaration можно вызвать до создания
function greet(name) {
    console.log("Hello -", name)
}

// Function Expression нельзя вызвать до создания
const greet2 = function greet2(name) {
    console.log("Hello 2 -", name)
}

greet("Lena")
greet2("lena")

// Anonymous functions
let counter = 1
const interval = setInterval(function (){
    if(counter === 5){
        clearInterval(interval) //also exists clearTimeout function
    } else{
        console.log(++Counter)
    }
}, 1000)

//Arrow Function
function greed(name)
{
    console.log('Hello -', name)
}
const arrow = (name) => {
    console.log('Hello -', name)
}

const arrow = (name) => console.log('Hello -', name)

// Default values
const sum = (a,b) => a + b
console.log(sum(4,)) // NaN, but

const sum = (a,b = 5) => a + b
console.log(sum(4,)) // all ok cause of default value

// ...all sum of all elements with simple js operator '...'

function sumAll(...all)
{
    console.log(all)
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1,2,3,4,5,6,7,8,9,10)
console.log(res)

// Closures

function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember("Bob")
console.log(logWithLastName('Slave')) // returns BobSlave
console.log(logWithLastName('Criston')) // returns BobCriston