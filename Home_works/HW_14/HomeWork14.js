/*
fibonacci
Напишіть функцію-генератор fibonacci, яка повертає наступне число Фібоначчі при кожному виклику.
Генератор повинен зупинитися після досягнення заданої межі n.

const fibGen = fibonacci(10);
console.log(fibGen.next().value);
// Виведе 0 console.log(fibGen.next().value);
// Виведе 1 console.log(fibGen.next().value);
// Виведе 1 console.log(fibGen.next().value);
// Виведе 2 console.log(fibGen.next().value);
// Виведе 3 console.log(fibGen.next().value);
// ... і так далі, поки не досягне або перевищить число 10
*/

function* fibonacci(n) {
    let a = 0;
    let b = 1;
  
    while (a <= n) {
      yield a;
      [a, b] = [b, a + b];
    }
}
  
const fibGen = fibonacci(10);
  
console.log(fibGen.next().value);     // returns 0
console.log(fibGen.next().value);     // returns 1
console.log(fibGen.next().value);     // returns 1
console.log(fibGen.next().value);     // returns 2
console.log(fibGen.next().value);     // returns 3
console.log(fibGen.next().value);     // returns 5
console.log(fibGen.next().value);     // returns 8
console.log(fibGen.next().value);     // returns undefined


/*
flatten
Напишіть функцію-генератор flatten, яка приймає масив, що містить вкладені масиви, і повертає генератор для ітерації по всіх елементах вкладених масивів. 
Зверніть увагу, що ваш генератор повинен обробляти різні рівні вкладеності та повертати всі елементи в одновимірному порядку.

const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
const flattenGen = flatten(nestedArr);

console.log([...flattenGen]);
// [1, 2, 3, 4, 5, 6, 7]
*/

function* flatten(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        yield* flatten(item);
      } else {
        yield item;
      }
    }
  }
  
const nestedArr = [1, [2, 3], [[4, 5, [6, 7]], 8, 9], 10];
const flattenGen = flatten(nestedArr);
  
console.log([...flattenGen]);        // returns [1, 2, 3, 4, 5, 6, 7]


/*
asyncGenerator
Створіть функцію-генератор asyncGenerator, яка отримуватиме на вході масив промісів і повертатиме результати виконання цих промісів у міру їхнього завершення.
*/

async function* asyncGenerator(promises) {
    for (const promise of promises) {
      yield await promise;
    }
}
  
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 6000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1000));
  
const promisesArray = [promise1, promise2, promise3];
  
const generator = asyncGenerator(promisesArray);
  
(async () => {
    for await (const result of generator) {
      console.log(result);
    }
})();