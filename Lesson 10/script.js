// Array
// Object
// Sting
// Number
// Boolean
// Date

const arr = [1, 2, 3];     // Array prototype

const arr1 = new Array(1, 2, 3);     // Array prototype. Array is a build-in class and is a prototype for the arr1

console.log(arr);

console.log(arr.filter((item) => item > 1));

const user1 = {
    name: 'Kate',
    age: 30,
    test: undefined
}

const user = {
    toString() {
        return `[object User]`;
    }
}

console.log(user1.toString());     // returns [object Object]
console.log(user.toString());      // returns [object User] because we re-defined the toString() to new functionality. it's shadowing, when our defined method in object is taken before take it from prototypes

console.log(String.prototype);

console.log(user1.hasOwnProperty('age'));    // returns true
console.log(user1.hasOwnProperty('toString'));    // returns false
console.log(user.hasOwnProperty('toString'));    // returns true
console.log(user1.hasOwnProperty('test'));    // returns true as the "undefined" value is not important here
console.log(Object.hasOwn(user1, 'name'));
// console.log(Object.hasOwnPropertyNames(user1));    // returns undefined for me ?

console.log(Object.getPrototypeOf(user1));      // to get all features the prototype includes

console.log(Object.getPrototypeOf(user1) === Object.getPrototypeOf(user));    // if true is returned, Object user1 and user are one prototype

user.isPrototypeOf(user1);

Object.setPrototypeOf(user, user1);
console.log(user.isPrototypeOf(user1));

const pers = Object.create(user1, {
    name: {value: 'Julia'},
    age: {value: 25}
})

console.log(pers);

function Person(name, age) {     // it should be capital letter when we create a prototype
    this.name = name;
    this.age = age
}

Person.prototype.sayHi = function(){
    return `My name is ${this.name}`;
}

const personA = new Person('Alex', 56);
const personB = new Person('Alice', 33);

console.log(personA.name);
console.log(personB.age);

console.log(personA);

console.log(personA.sayHi());    // returns 'My name is Alex'