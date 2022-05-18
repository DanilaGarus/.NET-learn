
// const output = `
// <html>
//     <div> This is div</div>
//     <p> This is p</p>
// </html>
// `
//
// // какой символ находится на позиции 2
// console.log(output.charAt(2))
//
// console.log(output.startsWith("<"))
// console.log(output.endsWith("<"))
//
// console.log(output.repeat(2))
//
// // очищение пробелов
// console.log(output.trim())

// новый синтаксис для строк в функциях
function logPerson(s,name,age) {
    if(age < 0) {
        age = "You can't exist ;)"
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const name = "Dan"
const age = 100

const output = logPerson`Name: ${name}, Age: ${age}!`

console.log(output)