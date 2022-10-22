const test = {
	prop: 42,
	newProp: 42,
	func: function() {
		return this.prop;
	},
	total: function() {
		return this.prop + this.newProp;
	}
}

// console.log(test.total());

function f1() {
  return this;
}

// console.log(f1() === globalThis);

class Example {
	constructor() {
		const proto = Object.getPrototypeOf(this);
		console.log(Object.getOwnPropertyNames(proto));
	}
	
	first() {}
	second() {}
	static third() {}
}

// new Example(); // [ 'constructor', 'first', 'second' ]
// Note: Static methods are not properties of this. They are properties of the class itself.


class Base {}
class Good extends Base {}
class AlsoGood extends Base {
	constructor() {
		return {a: 5}
	}
}

class Bad extends Base {
	constructor() {
		super()
	}
}

// new Good();
// new AlsoGood();
// new Bad();

// this in function contexts
// An object can be passed as the first argument to call
// or apply and this will be bound to it.
const obj = { a: 'Custom'}

// Variables declared with var become properties of the global object.
var a = 'Global';

function whatsThis() {
	return this.a; // The value of this is dependent on how the function is called
}


whatsThis(); 		  // 'Global' as this in the function isn't set, so it defaults to the global/window object in non–strict mode
whatsThis.call(obj);  // 'Custom' as this in the function is set to obj
whatsThis.apply(obj); // 'Custom' as this in the function is set to obj


function add(c,d) {
	return this.a + this.b + c + d;
}

const o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
console.log(add.call(o, 5, 7)); // 16


// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
console.log(add.apply(o, [10,20])); // 34

function bar() {
  console.log(Object.prototype.toString.call(this));
}

//bar.call(7);     // [object Number]
//bar.call('foo'); // [object String]
//bar.call(undefined); // [object global]

function fn() {
  return this.a;
}

const gn =fn.bind({ a: 'azerty' });
console.log(gn()); // azerty

const hn = gn.bind({ a: 'yoo' }); // bind only works once!
console.log(hn()); // azerty

const on = { a: 37, fn, gn, hn };
console.log(on.a, on.fn(), on.gn(), on.hn()); // 37,37, azerty, azerty

const oN = {
	f() {
		return this.a + this.b;
	}
}

const p = Object.create(oN);
p.a = 1;
p.b = 4;
console.log(p.f());

function sum() {
	return this.a + this.b + this.c;
}

const on1 = {
	a: 1, b: 2, c: 3,
	get average() {
		return (this.a+this.b+this.c) / 3
	}
}

Object.defineProperty(on1, 'sum', {
	get: sum,
	enumerable: true,
	configurable: true,
})

console.log(on1.average, on1.sum); // 2, 6

// this in classes
class Car {
	constructor() {
		// Bind sayBye but not sayHi to show the difference
		this.sayBye = this.sayBye.bind(this);
	}
	
	sayHi() {
		console.log(`Hello from ${this.name}`);
	}
	
	sayBye() {
		console.log(`Bye from ${this.name}`);
	}
	
	get name() {
		return 'Ferrari';
	}
	
}

class Bird {
	get name() {
		return 'Tweety';
	}
}

const car = new Car();   // Hello from Ferrari
const bird = new Bird(); // Hello from Tweety

// The value of 'this' in methods depends on their caller
car.sayHi();
bird.sayHi = car.sayHi;
bird.sayHi();


// For bound methods, 'this' doesn't depend on the caller
bird.sayBye = car.sayBye;
bird.sayBye();  // Bye from Ferrari











