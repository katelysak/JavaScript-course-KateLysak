/*
Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі. 
Числа Фібоначчі визначаються як послідовність, у якій кожне число дорівнює сумі двох попередніх чисел 
(наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі). Використовуйте рекурсію для обчислення чисел Фібоначчі.
*/


function fibonacci(n) {
    const MAX_VALUE = 100;
    if (n <= 1) {
        return n;
    } else if (n > MAX_VALUE) {
        return `Maximum value exceeded (${MAX_VALUE})`;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const result1 = fibonacci(7);      // returns 13
const result2 = fibonacci(0);      // returns 0
const result3 = fibonacci(220);    // returns 'Maximum value exceeded (100)'
const result4 = fibonacci(34);     // returns 5702887

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


/*
Попрацюємо з числовим паліндромом. Числовий паліндром — це натуральне число, 
яке читається зліва направо і справа наліво однаково. Інакше кажучи, відрізняється симетрією запису (розташування цифр),
причому число знаків може бути як парним, так і непарним. Але. Паліндром можна отримати як результат операцій над іншими числами.
Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами,
але у зворотному порядку. Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти,
доки не утвориться паліндром. Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525),
але, як правило, потрібно не менше двох. Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці.... 
Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром, 
і властивість steps — це число викликів до знаходження паліндрома. Для того, щоб перевірити себе використовуйте число 196. 
Це так зване Lychrel number — число яке немає поліндрому
*/


function isPalindrome(num) {
    const str = String(num);
    return str === str.split('').reverse().join('');
}

function findPalindrome(num) {
    let steps = 0;
    let currentNum = num;

    while (!isPalindrome(currentNum)) {
        const reversedNum = Number(currentNum.toString().split('').reverse().join(''));
        currentNum += reversedNum;
        steps++;

        if (steps >= 1000) {
            return { result: 'No palindrome found', steps };
        }
    }
    return { result: currentNum, steps };
}

const numberToCheck1 = 196;
const numberToCheck2 = 10;
const numberToCheck3 = 12321;           // already palindrom
const numberToCheck4 = 0;
const numberToCheck5 = -190;
const numberToCheck6 = 'testString';
const numberToCheck7 = '239';

const palindromeChecked1 = findPalindrome(numberToCheck1);
const palindromeChecked2 = findPalindrome(numberToCheck2);
const palindromeChecked3 = findPalindrome(numberToCheck3);
const palindromeChecked4 = findPalindrome(numberToCheck4);
const palindromeChecked5 = findPalindrome(numberToCheck5);
const palindromeChecked6 = findPalindrome(numberToCheck6);
const palindromeChecked7 = findPalindrome(numberToCheck7);

console.log(palindromeChecked1);      // returns 'No palindrome found', steps 1000
console.log(palindromeChecked2);      // returns 11, steps 1
console.log(palindromeChecked3);      // returns 12321, steps 0
console.log(palindromeChecked4);      // returns 0, steps 0
console.log(palindromeChecked5);      // result NaN, steps 1
console.log(palindromeChecked6);      // 'No palindrom found', steps 1000
console.log(palindromeChecked7);      // returns 239932, steps 1 (it works as strings join)


/*
Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву. 
Використовуйте рекурсію для знаходження всіх перестановок. Наприклад, якщо вхідний масив [1, 2, 3],
функція має повернути масив, що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [2, 3, 1], [3, 1, 2] і [3, 2, 1].
*/


function permutations(arr) {
    const result = [];

    function permute(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                const next = current.concat(remaining[i]);
                const left = remaining.slice(0, i).concat(remaining.slice(i + 1));
                permute(next, left);
            }
        }
    }

    permute([], arr);
    return result;
}


const inputArray1 = [1, 2, 3];
const inputArray2 = [4, 9];
const inputArray3 = [8];
const inputArray4 = ['apples', 'oranges', 'bananas', 'melons'];

const permutations1 = permutations(inputArray1);
const permutations2 = permutations(inputArray2);
const permutations3 = permutations(inputArray3);
const permutations4 = permutations(inputArray4);

console.log(permutations1);
console.log(permutations2);
console.log(permutations3);
console.log(permutations4);