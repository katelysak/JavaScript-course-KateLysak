// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі: Число N
// є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.
// 2 3 4 5 7 11

let numberInput = 12;

for (let N = 1; N <= numberInput; N++) {
    if (N === 2 || N === 3 || N === 5 || N === 7 || N === 11) {
        console.log(`The number ${N} is a prime number!`)
    } else if (N === 1 || N % 2 === 0 || N % 3 === 0 || N % 4 === 0 || N % 5 === 0 || N % 7 === 0) {
        console.log(`The number ${N} is not prime!`)
    } else {
        console.log(`The number ${N} is a prime number!`)
    }
}


// Вам необхідно написати програму, яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N, які є 
// досконалими числами.

let number = 8129;
let sum = 0;

for (let i = 1; i < number; i++) { 
    if (number % i === 0) { 
        sum += i;
    } 
}

if (number === sum) {
    console.log(`${number} is a perfect number!`);
} else {
    console.log(`${number} is not a perfect number!`)
}


// Вам необхідно написати програму, яка приймає на вхід число, що буде висотою вершини вашої ялинки. Уся ялинка
// має бути реалізована одним рядком:
//    * 
//   ***
//  *****
// *******
// 1 3 5 7


let treeHeight = 20;
let newYearTree = "";

for (let i = 1; i <= treeHeight; i++) {
    for (let j = 1; j <= treeHeight - i; j++) {
        newYearTree += " ";
    }
    for (let p = 0; p < 2 * i - 1; p++) {
        newYearTree += "*";
    }
    newYearTree += "\n";
}
console.log(newYearTree);