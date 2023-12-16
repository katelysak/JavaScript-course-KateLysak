/*
Вам необхідно написати функцію summarize(num), яка приймає на вхід число і повертає функцію,
яка під час виклику додає це число до аргументу і повертає результат. Якщо аргумент не передано, то додається одиниця.
Наприклад, якщо функція викликається з аргументом 5, то функція, що повертається, 
повинна при виклику з аргументом 3 повернути 8 (тому що 3 + 5 = 8) або 6, якщо аргумент не буде передано
*/

// function summarize(num, argPassed = 1) {
//     return function(){
//         let sumResult = 0;
//         if (argPassed) {
//             sumResult = num + argPassed;
//             return sumResult;
//         } else {
//             sumResult = num + 1;
//             return sumResult;
//         }
//     }
// }

// const summarizeResult = summarize(5, 3);    // returns 8
// console.log(summarizeResult());


function summarize(num) {
    return function(arg = 1) {
        return arg + num;
    };
}

const summarizeResult = summarize(5);

console.log(summarizeResult(3));    // Returns 8 -> 3 + 5 = 8
console.log(summarizeResult());     // Returns 6 -> 1 + 5 = 6


/*
Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - 
стартове значення лічильника і його крок. Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення
і повертає його поточне значення. Лічильник повинен мати методи increment, decrement і reset, 
які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.
*/

// function counter(startValue, step) {
//     let currentValue = 0
//     return function() {
//         increment() 
//             currentValue += step;
//             return currentValue;
//         decrement()
//             currentValue += step;
//             return currentValue;
//         reset() 
//             currentValue = 0
//             return currentValue;
//     }
// }

// const counterResult = counter();
// console.log(counter(1000, 2));


function counter(startValue, step) {
    let currentValue = startValue || 0;
    
    return {
        increment: function() {
            currentValue += step || 1;
            return currentValue;
        },
        decrement: function() {
            currentValue -= step || 1;
            return currentValue;
        },
        reset: function() {
            currentValue = 0;
            return currentValue;
        }
    };
}

const counterResult = counter(1000, 2);
console.log(counterResult.increment());     // Returns 1002
console.log(counterResult.increment());     // Returns 1004
console.log(counterResult.increment());     // Returns 1006
console.log(counterResult.decrement());     // Returns 1004
console.log(counterResult.reset());         // Returns 0


/*
Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції 
і повертає нову функцію, яка викликає їх послідовно з результатом попереднього виклику. 
Результат останньої функції має бути повернутий новою функцією. Кожна функція повинна мати доступ до результату попередньої функції через замикання.
*/

function number1 (num) {
    return num * 2;
}

function number2 (num) {
    return num - 2;
}

function number3 (num) {
    return num / 10;
}

function sequence(...functions) {
    return function(arg) {
        return functions.reduce((prevResult, currentFunc) => {
            return currentFunc(prevResult);       
        }, arg);
    };
}

const allFunctionsResult = sequence(number1, number2, number3);
console.log(allFunctionsResult(101));     // returns 20