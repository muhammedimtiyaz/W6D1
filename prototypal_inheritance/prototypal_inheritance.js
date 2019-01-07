Function.prototype.inherits = function(superClass) {
    function Surrogate() {}
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

function Animal(name) {
    this.name = name;
}

Animal.prototype.drinks = function() {
    console.log(`${this.name} drinks!`);
}

function Cat(age,name) {
    this.age = age; 
    Animal.call(this,name); 
}
Cat.inherits(Animal);

Cat.prototype.meow = function () {
    console.log(`${this.name} meows!`);
};

function Dog(age, color) {
    this.age = age;
    this.color = color;
}

Dog.prototype.woof = function() {
    console.log(`${this.name} woofs!`);
}

const cat1 = new Cat(7);
const dog1 = new Dog(3, "yellow");


cat1.meow();