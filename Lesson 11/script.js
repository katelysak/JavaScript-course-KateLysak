// rekurciya - function is calling the function when is run

const box = {
    type: 'box',
    items: [
        {
            type: 'box',
            items: [],
        },
        {
            type: 'box',
            items: [
                {
                    type: 'box',
                    items: [],
                },
                {
                    type: 'box',
                    items: [{type: 'key'}],
                },
            ],
        },
        {
            type: 'box',
            items: [
                {
                    type: 'box',
                    items: [],
                },
            ],
        },
    ]
}

// iteration approach

function lookForKey(box) {
    const queue = [box];

    while(queue.length) {
        const item = queue.shift;
        if(item.type === 'key') return item;

        for(const innerItem of item.items) {
            if(innerItem.item === 'key') return innerItem;
            queue.push(innerItem);
        }
    }
    return null;
}

// requrtion

function lookForKey1(box) {
    if(item.type === 'key') return item;

    for(const sunItem of item.items) {
        const key = lookForKey1(subItem);       // function is called by itself
        if (key) return key;
    }
    return null;
}

function countdown(i) {
    console.log(i);
    if(i === -5) return i;      // if we don't add 'return' this function is endless
    countdown(i - 1);        
}

countdown(5);

// fuctorial 3! = 1 * 2 * 3

const factorial = x => x === 1 ? 1 : x * factorial(x - 1);    // requrtion

console.log(factorial(3));

// hvostova rekurciya

const factorial2 = (x, acc = 1) => x === 1 ? acc : factorial(x - 1, x * acc);    // requrtion

console.log(factorial(3));


// curring

const multiply = (a, b, c) => a * b * c;

console.log(multiply(1, 2, 3));

const multiply1 = a => b => c => a * b * c;

console.log(multiply1(1)(2)(3));        // 3 function callings


function volume(l) {
    return (w, h) => {
        return l * w * h;
    }
}

const hV = volume(70);
hV(203, 142);
hV(220, 122);
hV(100, 123)