let cars = ['Ford', 'Honda', 'Lexus', 'Toyota']
console.log(cars.length)

let moreCars = ['Ferrari', 'Jeep', 'Lexus', 'Honda']

let totalCars = cars.concat(moreCars)
console.log(totalCars)
console.log(totalCars.indexOf('Honda'))
console.log(totalCars.lastIndexOf('Ford'))

let stringOfCars = totalCars.join()
console.log(stringOfCars)

totalCars = stringOfCars.split(",")
console.log(totalCars)

carsInReverse = totalCars.reverse()
console.log(carsInReverse)

carsInReverse = carsInReverse.sort()
// alert(carsInReverse.indexOf('Ferrari'));
console.log(carsInReverse)

let removedCars = carsInReverse.slice(1,4)
console.log(removedCars)

carsInReverse.splice(2,3, "Ford","Honda")
console.log(carsInReverse)

carsInReverse.push("Honda", "Honda")
console.log(carsInReverse)

console.log(carsInReverse.pop())
console.log(carsInReverse.shift())

carsInReverse.unshift("Hummmer")
console.log(carsInReverse)

var numbers = [23, 45, 0, 2]

const addTwo = (item, index, arr) => {
   arr[index] = item + 2;
}

numbers.forEach(addTwo)

console.log(numbers)
