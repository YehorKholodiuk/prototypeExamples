function Cat(name, color){
    this.name = name
    this.color = color
}
Cat.prototype.voice = function(){
    console.log(` Cat ${this.name} says meow`)
}

const cat = new Cat ('Kot','White')

console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__=== Cat.prototype)
console.log(cat.constructor)