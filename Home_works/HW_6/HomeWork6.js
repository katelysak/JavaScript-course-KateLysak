
/*
logArguments
Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.
1. decoratedFunc(1, 2, "test");
закидываем функцию в декоратор и
в консоли я должен увидеть столько аргументов, сколько я передам в эту функцию
*/


function myFunction(...args) {
    return args;
}

function logArguments(fn) {
    return function(...args) {
        console.log(...args.filter(arg => arg !== null));
        return fn(...args.filter(arg => arg !== null));
    };
}

const checkResult = logArguments(myFunction);
checkResult(1, null, 11, 'Kate', true);      // returns 1, 11, 'Kate', true


/*
validate
Вам необхідно написати функцію-декоратор validate(fn, validator), яка приймає на вхід функцію і 
додає можливість перевіряти аргументи, передані у функцію fn, на відповідність заданому validator. 
Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.
2. decoratedFunc(1, 2, "test");
закидываем все аргументы функции в валидатор (ограничения придумайте сами) и
либо проверяем все агрументы функции на каком-то вымышленном валидаторе, либо возвращаем ошибку *именно ошибку, а не просто надпись в консоль*
*/

function validate(fn, validator) {
    return function(...args) {
        if (validator(...args)) {
            return fn(...args);
        } else {
            throw new Error('Arguments do not pass validation'); // Викидання винятку, якщо аргументи не пройшли валідацію
        }
    };
}

function sum(a, b) {
    return a + b;
}

function validatorForNumbers(...args) {
    return args.every(arg => arg !== null && typeof arg === 'number');
}

const validatedSum = validate(sum, validatorForNumbers);

try {
    const result = validatedSum(3, 100);
    console.log('Result:', result);          // returns 'Result: 103"
} catch (error) {
    console.error('Error:', error.message);
}


/*
retry
Вам необхідно написати функцію-декоратор retry(fn, maxAttempts), 
яка приймає на вхід функцію і додає можливість викликати функцію з максимальною кількістю спроб у разі помилки та повертає результат останнього виклику.
3. retriedFunc= retry(exampFunc, 10)
вызываем функцию заданное кол-во раз, если на каком-то вызове она отвалилась - ошибку на каком по счету (опционально)
в консоли я должен увидеть резльтат последнего вызова, либо 
*/

function retry(fn, maxAttempts) {
    return function(...args) {
        let lastError;
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                const result = fn(...args);
                lastError = undefined;
                if (attempt === maxAttempts) {
                    return result;
                }
            } catch (error) {
                lastError = error;
                console.error(`Attempt ${attempt} failed: ${error.message}`);
            }
        }
        throw new Error('Function did not succeed after max attempts');
    };
}

function exampFunc() {
    const randomNumber = Math.random();
    if (randomNumber < 10) {
        throw new Error('Random error occurred');
    }
    return randomNumber;
}

const retriedFunc = retry(exampFunc, 10);
console.log(retriedFunc());