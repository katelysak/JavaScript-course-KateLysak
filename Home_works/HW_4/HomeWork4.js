
// Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.

function reverseString(str) {
    return str.split('').reverse().join('');
}

const stringResult = reverseString('Rabbit');

console.log(stringResult);



// Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.

function isPalindrome(str) {
    let removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    let revercedStr = removeChar.split('').reverse().join('');
    if(removeChar == revercedStr) {
        return true;
    } 
    return false;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome("A man, a plan, a canal. Panama"));



// Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.

function findGCD(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number')) 
    return 'Error - check passed numbers!';
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1 = -54;
const num2 = 12;
const gcd = findGCD(num1, num2);
console.log(`The GCD of ${num1} and ${num2} is: ${gcd}`);