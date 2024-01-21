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
  
  console.log(fibGen.next().value); // Виведе 0
  console.log(fibGen.next().value); // Виведе 1
  console.log(fibGen.next().value); // Виведе 1
  console.log(fibGen.next().value); // Виведе 2
  console.log(fibGen.next().value); // Виведе 3
  // ... і так далі, поки не досягне або перевищить число 10
//   Ця функція-генератор використовує деструктивне присвоювання для оновлення значень a та b,
//   забезпечуючи генерацію чисел Фібоначчі в нескінченному циклі, який зупиняється, якщо a перевищує задане значення n.



/*
flatten
Напишіть функцію-генератор flatten, яка приймає масив, що містить вкладені масиви, і повертає генератор для ітерації по всіх елементах вкладених масивів. Зверніть увагу, що ваш генератор повинен обробляти різні рівні вкладеності та повертати всі елементи в одновимірному порядку.

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
  
  const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
  const flattenGen = flatten(nestedArr);
  
  console.log([...flattenGen]);
  // [1, 2, 3, 4, 5, 6, 7]
//   Ця функція-генератор використовує рекурсію для обходу вкладених масивів та повертає їхні елементи в одновимірному порядку за допомогою yield.




/*
asyncGenerator
Створіть функцію-генератор asyncGenerator, яка отримуватиме на вході масив промісів і повертатиме результати виконання цих промісів у міру їхнього завершення.
*/

async function* asyncGenerator(promises) {
    for (const promise of promises) {
      yield await promise;
    }
  }
  
  // Приклад використання:
  
  const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
  const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 500));
  const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 800));
  
  const promisesArray = [promise1, promise2, promise3];
  
  const generator = asyncGenerator(promisesArray);
  
  (async () => {
    for await (const result of generator) {
      console.log(result);
    }
  })();

//   У цьому прикладі функція asyncGenerator використовує for...of для ітерації по масиву промісів
//   та yield await для повернення результатів промісів у міру їхнього виконання.
//   Код виводить результати у консоль у відповідності до часу завершення промісів.