function sum(x,y,z) {
	return x+y+z;
}

const numbers = [1,2,3];

console.log(sum(...numbers))
console.log(sum.apply(null, numbers))

const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
console.log(arr)
console.log(arr2)

let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);

let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]; // arr1 is now [0, 1, 2, 3, 4, 5]


const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1 
Array.prototype.unshift.apply(arr1, arr2); //  arr1 is now [3, 4, 5, 0, 1, 2]


let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]



const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

const obj1 = { foo: 'bar', x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // Object { foo: "bar", x: 1337 }


const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const merge = (...objects) => ({ ...objects });

const mergedObj1 = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

const mergedObj2 = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }


/* In the above example, the spread syntax does not work as one might expect: 
it spreads an array of arguments into the object literal, due to the rest parameter. 
Here is an implementation of merge using the spread syntax, 
whose behavior is similar to Object.assign(), 
except that it doesn't trigger setters, nor mutates any object: */
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const merge = (...objects) => objects.reduce((acc, cur) => ({ ...acc, ...cur }));

const mergedObj1 = merge(obj1, obj2);
// Object { foo: 'baz', x: 42, y: 13 }

// Rest property
// You can end a destructuring pattern with a rest property ...rest. 
// This pattern will store all remaining properties of the object or 
// array into a new object or array.

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]

// The rest property must be the last in the pattern, and must not have a trailing comma.
const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element














































