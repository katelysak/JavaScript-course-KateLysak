
function sum1(a, b) {
    const sum1 = a + b;
    return sum1;
}

function sum2(a, b) {
    return parseFloat(a) + parseFloat(b);
}
console.log(sum2(9, '3.14'));

function sum3(a, b) {
    return parseFloat(a) + parseFloat(b);
}

let aPar = 10;
let bPar = 5.887;
console.log(sum3(aPar, bPar));

// a variable can be used as a redult of function calling

p = 2;
l = 4;
const calculate1 = sum3(p, l);
console.log(calculate1);     // returns 6

function sum4(a, b) {       
    return;                     // return means that function will finish
    console.log(a + b);         // this code will not run - IDE shows uncheachable code
}


function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

// more logical to use this option

function checkAge(age) {
    if (age > 18) {            // if age < 18 this block will not run and function will skip {} and run false
        return true;
    }
    return false;
}
console.log(checkAge(15));

// creation of new function objects with "new"

const b = new sum3(12, 6);

// function can have parameters empty if they are declared globally

let t = 12;
let r = 8;

function sum5(){
    t = 1;                                  // assigns new value to t parameter
    return parseFloat(t) + parseFloat(r)    // r is taken from the outside the function
}
// const sum123 = sum5()
console.log(sum5());


// default parameters

function sum6(g, k = 2) {                       // if second parameter is not passed, function will take k = 2 by default
    return parseFloat(g) + parseFloat(k);
}
const e = sum6(3, 7);
console.log(e); 

function sum7(g = 5, k) {                   
    return parseFloat(g) + parseFloat(k);
}

console.log(sum7(2));                   // will print NaN as second parameter wasn't passed and wasn't defaulted


// rest parameter. the three dots ... mean we don't know how many parameters we will have

function step(...arg) {
    let sum = 0;
    for(let num of arg) {
        sum += num;    
    }
    return sum;
}

console.log(step(4, 6, 1, 2))

function step2(a, b, ...arg) {    // we know that we will have minimum 2 parameters
    let sum = 0;
    sum = a + b;
    for(let num of arg) {
        sum += num;    
    }
    return sum;
}

console.log(step2(1, 2, 8, 30));

console.log(step2(1));         // NaN will be logged. As we need the 2nd parameter



// shadowing - when function parameters are the same as global variables. Variable must have unique names 

function step3() {
    sum = 0;
    for(let num of arguments) {     // word "arguments" is used to pick up all arguments sent as parameters
        sum += num;
    }
    return sum;
}

console.log(step3(2, 3, 5));


// 2 ways to declare a function: declaration and expression

function funcName(parameter1, parameter2) {    // this is function declaration. The function can be called before it's declared, hoiting will work here
    return functionResult;
}


const funcExpession = function(g, k = 2) {     // this is a function expression and this is a variable first. Function doesn't have a name and is called anonimous function
    return parseFloat(g) + parseFloat(k);
}
console.log(funcExpession(2, 3));


// another way to make a function - errow function

const sum8 = (a, b) => {
    return parseFloat(a) + parseFloat(b);     // this function is also anonimous one. Can be used ONLY in function expression as it can't be created without the name
}

// if errow function only retunrs smth, the {} are not mandatory. This function can't be used with new, this

const sum9 = (a, b) => parseFloat(a) + parseFloat(b);

const sum10 = (r, m) => ({a: parseFloat(r), b: parseFloat(m)});

console.log(sum10(1, 2));

// methods are functions inside the object. Methods are aimed to make actions to object

const person = {
    name: 'Kate',
    age: 35,
    greet: function() {
        return `Hello my name is ${this.name}. I am ${this.age} years old.`
    }
}

console.log(person.greet());


// functions returning. JS allows to return functions as functions

function counter() {
    let count = 0;

    return function() {             // zamykannya funkcii, usually functions are run from the beginning. But with this function it "remembers" what was returned
        count++;    
        return count;
    }
}

const increment = counter();

console.log(increment());


// next - promitive methods

Number.isFinite(true);     // if the number is finite
console.log(Number.isFinite(true));    // returns false
console.log(Number.isFinite(1));       // returns true
console.log(Number.isFinite(Infinity));   // returns false

console.log(Number.isInteger(1));    // returns true
console.log(Number.isInteger(1.12));   // returns false
console.log(Number.isInteger(true));   // returns false

console.log(Number.isNaN(NaN));    // returns true, any other case will return false

console.log(Number.isSafeInteger(100000000000000));   // returns true unless the number is -2 in 52 and 2 in 52

console.log(Number.parseFloat('232'));    // returns 232

console.log(Number.parseInt(true));      // returns NaN
console.log(Number.parseInt('kate'));    // returns NaN

let a = 1.13245123412;

console.log(a.toFixed(2));       // in brackets we pass the number of decimals. !!! imports a string!!!

console.log(a.toPrecision(4));    // returns the number of digits put in brackets

// homework - methods of strings
// at
// concat
// startsWith / endsWith
// indexOf, lastIndexOf, includes
// padStart, padEnd
// repeat
// replase, replaseAll
// slice
// substring
// toLowerCase, toUpperCase
// trim, trimStart, trimEnd
// split

let stringName = 'Kate';

console.log(stringName.at(0));         // returns the first character of a given string
console.log(stringName.at(-1));         // returns the last character of a given string

let str1 = 'Hello';
let str2 = 'World';

console.log(str1.concat(' ', str2));    // returns 'Hello World'. Function concatenates the string arguments to this string and returns a new string