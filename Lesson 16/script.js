// generator functions

function* generateSequence () {
    return 'Hello generator!'
};
    
const generator = generateSequence();

console.log(generator.next());
console.log(generator);

// yieled

function* generateSequence2() {
    yield 1;
    yield 2;
    return 43;      // ends iterator work
    yield 3;
    yield 4;
};

const generator2 = generateSequence2();

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());    // generator state is changed to closed


// can be called in dinamic

function* range(from = 0, to = 10, step = 1) {
    for (let i = from; i < to; i+= step) yield i;
}

const gen = range()

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.return(45));    // iterator finishes its work and returns underfined and done
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());




function* generateSequence3() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 123;
};

const generator3 = generateSequence3();

for (const value of generator3) {
    console.log(value);
}

// const values = [...generator3]   // the same logic as above


function* calc(startValue = 0) {
    let result = yield startValue;
    result += yield result;
    return result;
}

const calculator = calc();

console.log(calculator.next());
console.log(calculator.next(2));
console.log(calculator.next(40));
console.log(calculator.next(40));    // returns undefined




function* calc2(startValue = 0) {
    let acc = startValue;
    while(true) {
        const input = yield acc;
        if (input) {
            acc += input;
        } else {
            return acc;
        }
    }
}

const calculator2 = calc2();

console.log(calculator2.next());
console.log(calculator2.next(2));
console.log(calculator2.next(40));
console.log(calculator2.next(40)); 
console.log(calculator2.next(40)); 
console.log(calculator2.next(40)); 
console.log(calculator2.next(40)); 
console.log(calculator2.next());     // iterators ends when we pass empty value and returns the accumulated value



function* generateNames() {
    try {
        yield 'John';
        yield 'Joe';
        yield 'Ivan';
    } catch(error) {
        console.log(error);
    }
}

const personGenerator = generateNames();

console.log(personGenerator.next())
personGenerator.throw(new Error('Something went wrong'));
console.log(personGenerator.next())



// Symbol.asyncIterator

let range2 = {
    from: 1,
    to: 5,

    [Symbol.asyncIterator](){
        return {
            current: this.from,
            last: this.to,

            async next() {
                await new Promise(resolve => setTimeout(resolve, 2000));

                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        }
    }
}

async function printNumbers() {
    for await (let value of range2) {
        console.log(value);
    }
}

printNumbers();



async function* generateSequence4(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000));

        yield i;
    }
}

async function printNumbers2(start, end) {
    let generator = generateSequence4(start, end);
    for await (const value of generator) {
        console.log(value);
    }
}

printNumbers2(1, 10);


let range3 = {
    from: 1,
    to: 10,

    async *[Symbol.asyncIterator]() {
        for (let value = this.from; value <= this.to; value++) {
            await new Promise(resolve => setTimeout(resolve, 2000));

            yield value;
        }
    } 
}

async function printNumbers3() {
    for await (const value of range3) {
        console.log(value);
    }
}

printNumbers2();