// object creation with litheral

const person = {
    firstName: 'Kate',
    lastName: 'Smith',
    age: 35,
    ifStudent: false,
    greet: function(){
        return `Hello, my name is ${this.firstName}`
    }
}

// object creation with new constructor

const person2 = new Object();

console.log(person2);

dynamicKey2 = 'age2';

person2.firstName = 'Mike';
person2.firstName = 'Michael';     // to change the value for the key
person2.lastName = 'Lee';
person2[dynamicKey2] = 32;

console.log(person2);

delete person2.firstName;    // deletes value in the object and the console.log above shows the updated object

// 3rd option for object creation - with constuctor of the class object

// Object.create();
// Object.assign();

class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('Mary', 'Black');

console.log(user);

// how to address objects key-value

console.log(person.greet());
console.log(user.firstName);
console.log(user?.firstName3);      // ? before the dot means that if the key firstName3 is not existing, the error will not appear and stop the code execution
console.log(user['firstName']);     // the same option to call as the previous one

console.log('firstName' in user);    // returns true or false

// dynamic object key

const dynamicKey = 'age';

const person3 = {
    firstName: 'Kate',
    lastName: 'Smith',
    [dynamicKey]: 35,         // the variable must have []
    ifStudent: false,
    greet: function(){
        return `Hello, my name is ${this.firstName}`
    }
}

const person4 = {
    firstName: 'Kate',
    lastName: 'Smith',
    [dynamicKey]: 35,         
    ifStudent: false,
    greet(){                                        // another way is not to use the word function
        return `Hello, my name is ${this.firstName}`
    }
}

console.log(person3);
console.log(person3.age);


// to call the value inside other objects in the object

const person5 = {
    firstName: 'Kate',
    lastName: 'Smith',
    age: 35,
    ifStudent: false,
    greet: function(){
        return `Hello, my name is ${this.firstName}`
    },
    license: {
        number: '1234',
        seria: 'US',
        org: {
            country: 'UA',
            region: 'Kharkiv'
        }
    }
}

console.log(person5.license.org.region);

const {
    firstName,
    license: {
        seria: string,          // we can call string and get the key
        org: {
        country = 0             // we can change the value by default, if county will not exist, the 0 will be returned
        }
    },
    ...rest                     // means all other objects will be taken as variables but you should use rest.age
 } = person5;

console.log(country);     // country is a veriable and we can call it directly;
console.log(firstName);
console.log(string);          // prints 'US'


// static object methods

console.log(Object.keys(person5));           // to put all keys in console
console.log(Object.values(person5));         // to put all values in console
console.log(Object.entries(person5));       // pairs key-value in the console
// console.log(Object.fromEntries(person5));    // created an object from the key-value array pairs

// another way to create an object from the object and add keys to it

const person6 = {
    ...person5,         // takes all key-values from the object person5
    gender: 'male',     // adds key-value to new object from the object6
    firstName: 'Ben'    // changes the value of the firstName in the person6
}

console.log(person6);



// arrays
// way one - literal, constructor

const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr);
console.log(arr2);

// the array difference from the object: 1) the keys are always the numbers 0, 1, 2 ... and the length 

arr.length = 2;
console.log(arr);    // changes the length of the existing array to 2

delete arr[1];
console.log(arr);   // leave a place of the deleted element and it's consoled.log as 'empty'

const arrNew = [11, 12, 13];
const [a, b, c, d = 33] = arrNew;       // it's ok to use when we know the length of array       // we defaulted the value of the d if it's not defined

console.log(b);
console.log(d);

const arr3 = [
    ...arrNew,                  // all values from the array arrNew are copied in this array
    40,                         // new values are added
    50
]

console.log(arr3);

// static array methods

const myArray = arr3.map((item) => item + 1);   // new array myArray is addedand all values inside are values from arr3 + 1;

console.log(myArray);

arr3.forEach((item) => console.log(item + 1));   // method changes current array arr3

const n = arr3.filter((item) => item > 30);     // filters all values by the function you provide

console.log(n);

const p = arr3.some((item) => item > 51);     // returns true if at least 1 values in the array fits the condition

console.log(p);

const y = arr3.every((item) => item > 10);     // returns true if all values in the array fit the condition

console.log(y);