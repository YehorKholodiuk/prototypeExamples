function Person(){}
Person.prototype.legs = 3
Person.prototype.skin = 'white'

const person = new Person()
person.name = 'Charlie'

console.log('skin' in person)
console.log(person.legs)
console.log(person.name)
console.log(person.hasOwnProperty('legs'))

