// array methods

const arr = [1, 2, 3, 4, 5];

// callback is when one function is passed as a parameter for another function. (number => number > 3) is a callback function

console.log(arr.find(number => number > 3));    // returns 4. Finds the first matching element and returns it

console.log(arr.findLast(number => number > 3));    // returns 5. Finds the last matching element and returns it

console.log(arr.findIndex(number => number > 3));    // returns the Index of 4 - first element matching the condition

console.log(arr.findLastIndex(number => number > 3));    // returns the Index of 5 - last element matching the condition


// method sort

const arr2 = [2, 4, 1, 3, 5];

console.log(arr2.sort());    // returns [1, 2, 3, 4, 5]

console.log(arr2.sort((a, b) => a - b));    // another way of sorting -> returns [1, 2, 3, 4, 5]


// bubble sort
// Bubble sort compares the element from index 0 and if the 0th index value is greater than 1st index value, then the values get swapped and if the 0th index value is less than the 1st index value, then nothing happens.
// Next, the 1st index value compares to the 2nd index value, and then the 2nd index value compares to the 3rd index value, and so on…

// Creating the bblSort function
function bblSort(arr) {
 
    for (var i = 0; i < arr.length; i++) {
 
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
 
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
 
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
 
    // Print the sorted array
    console.log(arr);
}


// method of unique values - Set

const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("текст"); // Set(3) { 1, 5, 'текст' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o ссылается на другой объект, так что это нормально

mySet1.has(1); // true
mySet1.has(3); // false, поскольку 3 не был добавлен в набор
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Текст".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // удаляет элемент 5 из set
mySet1.has(5); // false, 5 был удалён

mySet1.size; // 4, поскольку мы удалили одно значение

mySet1.add(5); // Set(5) { 1, "текст", {...}, {...}, 5 } - ранее удаленный элемент будет добавлен как новый элемент, он не сохранит свое первоначальное положение до удаления

console.log(mySet1); // Set(5) { 1, "текст", {…}, {…}, 5 }


// method Map.
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
// A key in the Map may only occur once; it is unique in the Map's collection.

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1


// this

const me = {
    name: 'Kate'
}

const you = {
    name: 'Ivan'
}

function identify(context) {
    return context.name.toUpperCase();
}

function speak(context) {
    return `Hello, I'm ${identify(context)}`;
}

console.log(identify(you));
console.log(speak(me));
// this is not perfect example of working with objects

// this is never calling/interacting with the function - common mistake
// this is not defining the scope (the areas to get the veriable)

// ogoloshennya baz
function baz() {
    // call stack 'baz', call point - global scope
    console.log('baz');
    bar();              // <- tochka vyklyku bar
}

// ogoloshennya bar
function bar() {
    // call stack 'baz' -> bar', call point - function 'baz'
    console.log('bar');
    foo();              // <- tochka vyklyku foo
}

// ogoloshennya foo
function foo() {
    // call stack 'baz' -> 'bar' -> 'foo', call point - function 'bar'
    console.log('foo');
}

baz();    // <- tochka vyklyku baz

foo();

// linking by default

function foo() {
    console.log(this.a);    // this means global scope
}

var a = 43;

foo();

const ex = {
    a: 42,
    foo
}

ex.foo();    // prints 42


// another case of binding

function foo2() {
    console.log(this.a2);
}

var a2 = 10;

const ex2 = {
    a2: 45
}

foo2(ex2);          // returns 10. a2 is taken from global scope
foo2.call(ex2);     // returns 45. We bind the a2 = 45 to this


// strict binding

const baz3 = foo2.bind(ex2);    // we strictly bind the ex2 a2 = 45 to be used in the function foo2
baz3();

// creation with the 'new' operator

function foo3(a3) {
    // this is created
    this.a3 = a3;           // we say that a3 is a parameter of this function
    // this is returned
}


const baz4 = new foo3(51);

console.log(baz4.a3);

// high order functions - fynkcii decoratory

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

const checkLength = (item) => item?.length;

// const arr1 = strArray.map((item) => checkLength(item));     // this can be done to meet our goal but we will use another way - high order function;

const mapString = (arr, fn) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

const newArr2 = mapString(strArray, checkLength);

console.log(newArr2);      // returns [10, 6, 4, 3, 1]

// Функция-декоратор - это функция,которая в качестве аргумента принимает другую функцию.
// И следовательно другая функция будет являться колбеком в контексте декоратора