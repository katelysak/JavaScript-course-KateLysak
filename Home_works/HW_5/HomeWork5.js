
// Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.

const originalArray = [1, 2, 3, 4, 5];

const reversedArray = arrayPassed => {
    const revercedArray = arrayPassed.reverse();
    return revercedArray;
}

console.log(reversedArray(originalArray));     // returns [5, 4, 3, 2, 1]


// Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const arrayNew = array1.concat(array2);

let uniqueValuesArray = [...new Set(arrayNew)];

console.log(uniqueValuesArray);         // returns array [1, 2, 3, 4, 5, 6, 7]


// Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.

const students = [ 
    { name: "Alice", age: 20, grade: 4.5 }, 
    { name: "Bob", age: 21, grade: 3.9 }, 
    { name: "Charlie", age: 19, grade: 4.8 } 
    ]; 

function calculateAverageGrade(arrayToUse) {
    let sum = 0;
    let numberOfStudents = arrayToUse.length;
    arrayToUse.forEach((element) => sum += element.grade);
    return parseFloat(sum/numberOfStudents).toFixed(1);
}

console.log(calculateAverageGrade(students)); // 4.4