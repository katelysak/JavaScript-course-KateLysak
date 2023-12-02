false
undefined
null
NaN
0
0n
''

// case to reproduce infinity

if (9/0) {
    console.log('Infinity is true')   // the code runs and this means that infinity is regarded as true
}

const condition = true;

if (condition) {
    console.log('Condition is true')
} else {
    console.log('Condition is false')
}
condition ? console.log('Condition is true') : console.log('Condition is false')    // absolutely the same logic


const condition2 = 12; 

if (condition2 === 0) {
    console.log('Condition is zero')
} else if (condition2 === 1) {
    console.log('Condition is one')
} else {
    console.log('Condition is smth else')
}

// vldadeli/vlogennye umovy - if operator is inside if operator

const condition3 = 1; 

if (condition3 > 0) {
    if (condition3 === 2) {
        console.log('Condition is two')
    }
    console.log('Condition is more than zero')    //  when condition is met and run other blocks of code are not run
} else if (condition3 === 1) {
    console.log('Condition is one')
} else {
    console.log('Condition is smth else')
}

// if more than two conditions are met from one if peace if code -> they are run

const condition4 = 0; 

if (condition4 > 0) {
    if (condition4 === 2) {
        console.log('Condition is two')   //  both conditions are met and two console log are in console
    }
    console.log('Condition is more than zero')    //  both conditions are met and two console log are in console
} else if (condition4 === 1) {
    console.log('Condition is one')
} else {
    console.log('Condition is smth else')
}

// switch

switch(condition4) {
    case 0:
        console.log('Condition is zero');
        break;
    case 1:
        console.log('Condition is one');
        break;
    default:
        console.log('Other number');
        break;
}
// break can't be used instead of break! return can be used only inside the function

// var condition5 = 0;

// switch(condition5) {
//     case 0:
//         return 'Condition is zero';
//         // break;
//     case 1:
//         return 'Condition is one';
//         // break;
//     default:
//         return 'Other number';
//         // break;
// }

// try ... catch construction for errors processing
// iside the try block we put a code which might cause ar error

try {
    // Code with error
} catch {
    // Error processing
}

try {
    const userInput = prompt('Input a number: ');
    const parsedInput = parseInt(userInput);
    const result = 10 / parsedInput;

    if (Number.isNaN(parsedInput)) {
        throw new Error('Value is NaN');
    }
    console.log('Result: ' + result);
} catch (error) {
    console.log('Error happened: ' + error.message);
} finally {                          // finally block is always run: error happend or not
    console.log('Result is culculated')
}