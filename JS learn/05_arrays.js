const cars = ["BMW", "BENZ", "LADA"]
const fib = [1,1,2,3,5,8,13]
const people = [
    {name: "Aboba",budget: 300},
    {name: "Bobus",budget: 500},
    {name: "Amogus",budget: 1000}
]

// add element to array cars
cars.push("RENO")
console.log(cars)

// add element to the 0 index position
cars.unshift("Porsche")
console.log(cars)

//remove first element
cars.shift()

//reverse
cars.reverse()
console.log(cars)

//simple index for simple arrays of int's and strings
const index = cars.indexOf("BMW")
cars[index] = "Tesla"

//god damn index for arrays consists from objects (for example
// with === of money by 500, works like filter)
const index2 = people.findIndex(function (person) {
return person.budget === 500
})
console.log(people[index2])

//another variant of array fonding index realisation
const index3 = people.find(function (person) {
    return person.budget === 500
})
console.log(people[index3])

// and another variant of array index f with new sintax of js
const person = people.find(person => person.budget === 500)
console.log(person)

//does this element exists in array?
console.log(cars.includes("BMW"))

//creates new array on base of exists array
// but all elements from old array are UpperCase
// in new array
const upperCaseCars = cars.map( car => {
    return car.toUpperCase()
})
console.log(upperCaseCars)

//zadacha 1
const text = "aboba"
const reverseText = text.split("").reverse().join("")
console.log(reverseText)