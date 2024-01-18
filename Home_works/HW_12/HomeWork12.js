/*randomDelayPrint
Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і 
виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди.
Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.

randomDelayPrint("Hello"); 
Очікуваний результат (затримки між літерами будуть різними):
H (невелика затримка)
e (велика затримка)
l (маленька затримка)
l (маленька затримка)
o (велика затримка)
*/

function randomDelayPrint(str) {
    for (let i = 0; i < str.length; i++) {

        const randomDelay = Math.random() * 1000;

        setTimeout(() => {
            console.log(str[i]);
        }, randomDelay);
    }
}

randomDelayPrint("Hello");


/*
debounce
Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи. 
Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, 
як минула вказана кількість часу без викликів. Це дасть змогу ігнорувати часті виклики функції та виконувати її 
лише один раз через зазначену затримку після останнього виклику.

const expensiveOperation = () => console.log("Виконую складну операцію..."); constdebouncedExpensiveOperation = debounce(expensiveOperation, 1000);
debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();
// Через 1 секунду після останнього виклику "Виконую складну операцію..." має бути виведене в консоль тільки один раз.
*/

function debounce(callback, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);

debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();


/*
intervalRace
Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах.
Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t.
Коли всі функції виконано, intervalRace має повернути масив із результатами.
*/

function intervalRace(functions, interval) {
    const results = [];
    let index = 0;

    function executeFunction() {
        if (index < functions.length) {
            const result = functions[index]();
            results.push(result);
            index++;
            setTimeout(executeFunction, interval);
        }
    }

    executeFunction();

    return results;
}

const delayedFunctions = [
    () => "Function 1",
    () => "Function 2",
    () => "Function 3"
];

const results = intervalRace(delayedFunctions, 1000);
console.log(results);