
// Callback

// asyncFunc(a, b, result => {
//     console.log(result);
// })

// Promise

/*
asyncFunc(a, b)
    .then(result => {           // is called when success
        console.log(result);
    })
    .catch(err => {})           // is called when rejected/error
    .finally()                  // is called anyway       

// Promise statuses: pending (waiting), fulfilled (done), rejected (error)


resolve(value)  // - request success
reject(error)   // - request  error

// the logic of Promise. Promise is called only once

new Promise(
    function(resolve, reject){
        if(result.success) {
            resolve(result.value);
        } else {
            reject('reason');
        }
    }
)

asyncFunc(a, b)
    .then(result => {           // result is a server response returned
        console.log(result);
    })
    .then(res => new Promise().then(str => str + res))    // Promises chain
*/

// async - await

async function hello() {
    return 'hello';
}

const a = hello();         // we are saving Promise in a

console.log(a);            // returns Promise result

a.then(console.log);       // returns result 'hello'


async function fetchData(num){
    const response = await fetch(`https://swapi.dev/api/people/${num}/`)    // fetch gets the URL address   // await means it will call AND wait for the function to work -> then will save in response
    const data = await response.json();                                     // await means we say to wait for the response and then only save in the data variable
    return data;
}

console.log(fetchData(5));
console.log(fetchData(8));
console.log(fetchData(10));


// how to manage errors with "try-catch"

async function fetchData2(num){
    try{
        const response = await fetch(`https://swapi.dev/api/people/${num}/`);
        if(!response.success) {
            throw new Error('Request is failed')
        }
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error(error.message);
        throw error;
    }
}