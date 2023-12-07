// Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.

function reverseString(str) {
    return str.split('').reverse().join('');
}

const stringResult = reverseString('Rabbit');

console.log(stringResult);


// Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.

function isPalindrome(str) {
    revercedStr = str.split('').reverse().join('');
    if(str == revercedStr) {
        return true;
    } 
    return false;
}

console.log(isPalindrome('madam'));


// Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.

function findGCD(a, b) {
    a *= 0.2;
    b *= 0.2;
    return a + b;
}

const resultGCD = findGCD(1000, 10000);

console.log(resultGCD);