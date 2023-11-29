var name1 = 'Piter';

var string = `Hello my name is ${name1}`; // comment is added

console.log(string);
console.log(string.length);
console.log(string[0]);
console.log(string[26]);

console.log(5-'5');

// num is a variable which takes str and converts to number 
var str = '3';
var num = parseInt(str);

console.log(num);

// num is a variable which takes decimal and converts to number with decimals
var str2 = '7.14';
var num2 = parseFloat(str2);
console.log(num2);

// by adding a string to a number we change it to string
var newStr = num2+''
console.log(newStr);

var num3 = 4/0;
console.log(num3);

var num4 = 'hello' / 1;
console.log(num4);   // will print NaN (not a number)

var num5 = 1e6;
console.log(num5);    //  prints the number of 0 after 'e'
/*
multiline comment 
*/

var isKate = true;
console.log(isKate);