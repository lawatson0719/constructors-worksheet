function Animal () {
	this.hungry = 100;
}

Animal.prototype.says = '...';

Animal.prototype.speak = function () {
	return this.says;
}

Animal.prototype.eat = function (food) {
	if (food instanceof Animal && this.eats.indexOf('animal') > -1) {
		if (this.hunger > 0) {
			this.hunger -= (100 - food.hunger)
			} else {
				this.hunger = 0;
			}			
	} else if (typeof food === 'string') {
		if (this.eats.indexOf(food) > -1) {
			if (this.hunger > 0) {
				this.hunger -= 10;
			} else {
				this.hunger = 0;
			}		
		} else {
			this.hunger = 100;
		}
	}
}

function Dog () {
	Animal.call(this);
	this.says = 'woof';
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.eats = ['plant', 'animal'];




function Cat () {
	Animal.call(this);
	this.says = 'meow';
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.eats = ['animal'];



function Snail () {
	Animal.call(this)
}

Snail.prototype = Object.create(Animal.prototype);

Snail.prototype.eats = ['plant','fungus', 'algae'];

var snail = new Snail();
var dog = new Dog();
var cat = new Cat();


snail.eat('fungus');
dog.eat(snail);
cat.eat(dog);

console.log(dog);
console.log(cat);
console.log(snail);



