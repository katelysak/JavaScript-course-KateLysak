
// setTimeout

const sayHello = (phrase, name, timer) => {
    clearTimeout(timer);
    console.log(`${phrase} ${name}`)
}

let timer;
let timer1
timer1 = setTimeout(sayHello, 5000, 'Hello', 'Kate1')           // asynchronous approach
timer = setTimeout(sayHello, 2500, 'Hello', 'Kate', timer)      // asynchronous approach

// clearTimeout(timer);   // code will not run as we cleared the timer


// setInterval

const sayHello2 = (phrase, name, timer) => {
    console.log(`${phrase} ${name}`)
}

let timer2;
timer2 = setInterval(sayHello2, 2500, 'Hello', 'Adam', timer)      // code will run with the interval of 1 sec infinetely until we stop it

clearInterval(timer2);

let timer3 = setTimeout(function kick() {
    timer3 = setTimeout(kick, 2000);
}, 2000)