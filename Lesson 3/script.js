// there are two methods for objects creation

// literal way
var obj = {
    name: 'Kate',
    age: 35,
    female: true,
    test: {
        a: 1,
        b: false
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj['name']);    // another way to the same above
console.log(obj.test.b);
console.log(obj['test']['a']);

obj.ihor = {
    name: 'Ihor',
    age: 37
}

// 2nd way through the constructor "object" class with "new" word
// obj1 and obj2 are the same objects but created in different ways

var obj2 = new Object();
var obj1 = {};

// to add values to obj2 we should call it

obj2.name = 'Anna';

// arrays are created with literal and with Array constructor
// in arrays there are no keys but thay are defaulted to indexes 1: 2: and so on

var arr = [1, 2, 3, "string", {name: 'Kate'}, false];
var arr2 = new Array(1, 2, 3);

console.log(arr);
console.log(arr2);

console.log(arr[4]);
console.log(arr2[2]);

console.log(arr.length);

// to know the data type use "typeOf"

console.log(typeof arr);
console.log(typeof true);
console.log(typeof "true");
console.log(typeof 10n);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof function(){});
console.log(typeof '123' == 'string');

var str = new String('My text');

// change of the data type
console.log(4);
console.log(String(4));
console.log(Boolean(4));
console.log(Boolean(0));     // only 0 is false
console.log(Boolean(-2));
console.log(parseInt('123'));
console.log(parseFloat('123.5'));
console.log(parseFloat('wewed'))    // NaN
console.log(Number('asd'))     // NaN
console.log(Number('200p'))     // NaN

// operators 5 types: ariphmetic (+ - *), comparison (> < = ), logical (||)
console.log(17%5);
console.log(17 > 90);
console.log(12 >= 11);
console.log(19 > 19);    // returns false
console.log(19 == 19);   // returns true as operant compares values
console.log(19===19);    // returns false as == compares values and additional = compares data type
console.log(19 != 18);
console.log(9 !== '9');  // returns false as add = compares data types
console.log(12 > 9 || 12 > 14);   // returns true as one of the sides gives true
console.log(12 > 9 && 12 > 14);   // returns false as both sides must be true to return true 
console.log(!(6 > 4));    //  returns false because ! changes the statement to the opposite; the statement must be false so the code is run
console.log(0 || 100);    // if the left side is true, right side will not be run; is left side is false, the right side will be run
console.log(0 ?? 100);    // ?? means that the right side will be run only if there are null or undefined in the left side

var a = 1;
a += 2;
console.log(a);

var condition = false;
condition ? console.log('Condition is true') : console.log('Condition is false');

var condition2 = true && false || true && true;   // will print true
console.log(condition2);

// variables: global, functional and block (if statement)

function getName() {
    var name5 = 'Lena';      // this variable is functional and will be available only inside the function
    console.log(name5);
}

if (2 > 1) {
    var name5 = 'Liza'     // variable inside the if statement is available outside the {}
}
console.log(name5);

// hoisting. Hoisting in Javascript is a mechanism in which the variables and function declarations are moved 
// to the top of their scope before the execution of the code. The function expressions and arrow functions cannot be hoisted.
// On the other hand, all the variables in javascript are hoisted.

console.log(hoisingVar);    // prints 'undefined'
if (2 > 1) {
    var hoisingVar = 'Apple'
    console.log(hoisingVar);   // prints 'Apple'
}
