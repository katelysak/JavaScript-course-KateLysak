// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення залежно від 
// значення числа. Якщо число ділиться на 3, то повідомлення має бути Fizz, якщо число ділиться на 5, то 
// повідомлення має бути Buzz, а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz. Наприклад, 
// для числа 15 повідомлення має бути FizzBuzz.

var number1 = 15;

if (number1 % 3 === 0 && number1 % 5 === 0) {
    console.log('FizzBuzz');
} else if (number1 % 3 === 0 || number1 % 5 === 0) {
    if (number1 % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log('Buzz');
    }  
}   else {
    console.log('Number is not devisible to 3 and 5')
}


// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення, що вказує, чи є 
// введений рік високосним.

const year = 2008;

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(`${year} is a leap year`)
} else {
    console.log(`${year} is a non-leap year`)
}

// Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі Вам N рік 
// / ріки / років. Залежно від числа N слово рік має змінюватися на років або року. Наприклад, Вам 1 рік, Вам 5 років, 
// Вам 42 роки.
// рік - 1, роки - 2 3 4, років - 5 6 7 8 9 10 

var age = 73;

if ((age > 10 && age < 20) || age % 10 === 0 || age % 10 === 5 || age % 10 === 6 || age % 10 === 7 || age % 10 === 8 || age % 10 === 9) {
    console.log(`Вам ${age} років`)
} else if (age === 1 || age % 10 === 1) {
    console.log(`Вам ${age} рік`)
} else if (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) {
    console.log(`Вам ${age} роки`)
} else {
    console.log('Unknown error')
}

