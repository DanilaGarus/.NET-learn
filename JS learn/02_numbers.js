// Number

// Округление нецелых чисел (в данной ситуации без
// ToFixed результат будет 0.6000000000000001
// в метод ToFixed мы передаёмдо скольки знаков после запятой сократить
console.log((0.4 + 0.2).toFixed(1))

//BigInt выходит за значение безопасного int, где n после числа означает BigInt тип
console.log(90071992547409919999n)

// разного рода округление чисел
console.log(Math.floor(4.9)) // округ в меньшую сторону
console.log(Math.ceil(4.9)) // округ в большую сторону
console.log(Math.round(4.9)) // округ к ближайшему целому
console.log(Math.trunc(4.9)) // целую часть числа путём удаления всех дробных знаков
console.log(Math.fround(4.9)) //возвращает ближайшее число с плавающей запятой одинарной точности

function getRandimBeetwen(min, max) {
  return Math.round(Math.random() * (min - max) + min)
}

console.log(getRandimBeetwen(1, 100))
