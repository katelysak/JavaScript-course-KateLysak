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

        const randomDelay = Math.random() * 2000;

        setTimeout(() => {
            console.log(str[i]);
        }, randomDelay);
    }
}

randomDelayPrint("Hello");
randomDelayPrint("Application");

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



/*
intervalRace
Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах.
Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t.
Коли всі функції виконано, intervalRace має повернути масив із результатами.
*/

function intervalRace(functions, t) {
    return new Promise((resolve) => {
        const results = [];
        let index = 0;

        function executeFunction() {
            if (index < functions.length) {
                const currentFunction = functions[index];
                const result = currentFunction();
                results.push(result);
                index++;

                setTimeout(executeFunction, t);
            } else {
                resolve(results);
            }
        }

        executeFunction();
    });
}

// Приклад використання:
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const functionsArray = [
    async () => {
        await delay(1000);
        return 'Function 1';
    },
    async () => {
        await delay(500);
        return 'Function 2';
    },
    async () => {
        await delay(1500);
        return 'Function 3';
    },
];

intervalRace(functionsArray, 1000).then((results) => {
    console.log(results);
});