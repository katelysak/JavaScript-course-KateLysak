// execution stack - the structure

// lasy in -> first out
// execution context of commands 1, 2, 3 first go and are saved to the execution stack execution storage as 1, 2, 3 and then they are executed 3, 2, 1 - ???

function first() {
    console.log('Inside first function');
    second();
    console.log('Again inside the first function');
}

function second() {
    console.log('Inside second function');
}

first();

console.log('Inside Global Execution Context');


// while the creating the Executional Context there are 2 fields created with references to LexicalEnvirnment and list of veriables;
// ExecutionContext = {
//     LexicaEnvironment = <ref. to LexicaEnvironment in memory>;
//     EnvironmentEnvironment = <ref. to LexicaEnvironment in memory>;
// }

// this will be saved in the LexicaEnvironment
const a = 20;
const b = 10;

function foo() {
    console.log(a);
}
// this will be saved in the lexicalEnvironment:
// lexicalEnvironment = {
//     a: 20,
//     b: 10,
//     foo: <ref. to function>
// }

// LexicalEnvironment saves 3 things: info about:
// 1) environment (were veriables, functions and arguments are saved),
// 2) mechanist for searning for veriables in global if they were no found in local (functions Map, Filter)
// 3) "this" building

// Variable Environment functions the same as Lexical but it has veriables saved with "var" only

var e = 15;
const a1 = 20;
const b1 = 10;

// this will be saved in the lexicalEnvironment and veriableEnvironments:

// lexicalEnvironment = {
//     a1: 20,
//     b1: 10,
// }

// variableEnvironment = {
//     e: 15
// }



// example

let a2 = 20;
const b2 = 30;
var c;

function multiply(e, f) {
    var g = 2;
    return e * f * g;
}

c = multiply(a ,b);

// creation phase
/*
GlobalExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Object',
            a2: <uninitialized>,
            b2: <uninitialized>,
            multiply: <func>
        }
        outer: <null>,              // reference to the global variables
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecore: {
            Type: 'Object',
            c: undefined
        }
        outer: <null>,
        this: <Global Object>
    }    
}
*/

// execution phase
/*
GlobalExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Object',
            a2: 20,
            b2: 30,
            multiply: <func>
        }
        outer: <null>,              // reference to the global variables
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecore: {
            Type: 'Object',
            c: undefined
        }
        outer: <null>,
        this: <Global Object>
    }    
}

// execution phase 2
/*
GlobalExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Object',
            a2: 20,
            b2: 30,
            multiply: <func>
        }
        outer: <null>,              // reference to the global variables
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecore: {
            Type: 'Object',
            c: <FunctionExecutionRecord>       -> 1200          // after functionContext execution is run
        }
        outer: <null>,
        this: <Global Object>
    }    
}

// for the function c the separate ExecutionCntext is created

// creation phase
</Global>FunctionExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            Arguments: { 0: 20, 1: 30, length: 2 },
        }
        outer: <GlobalEnvironmentRecord>,             
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecore: {
            Type: 'Declarative',
            g: undefined
        }
        outer: <GlobalEnvironmentRecord>,
        this: <Global Object>
    }    
}
// execution phase
FunctionExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            Arguments: { 0: 20, 1: 30, length: 2 },
        }
        outer: <GlobalEnvironmentRecord>,             
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecore: {
            Type: 'Declarative',
            g: 2,
        }
        outer: <GlobalEnvironmentRecord>,
        this: <Global Object>
    }    
}
*/


// zamykannya
// to reproduce zamykannya you need a function which returns the function, and then you should save this in a variable and console log this variable

function createCounter() {
    let counter = 0;

    return function() {
        return counter++;
    }
}

const counter = createCounter();

console.log(counter());    // returns 0
console.log(counter());    // returns 1
console.log(counter());    // returns 2
console.log(counter());    // returns 3
console.log(counter());    // returns 3

/* creation phase

GlobalExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Object',
            counter: <uninitialized>,
            createCounter: <func>
        }
        outer: <null>,              // reference to the global variables
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecord: {
            Type: 'Object'
        }
        outer: <null>,
        this: <Global Object>
    }    
}


// execution phase

GlobalExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Object',
            counter: <uninitialized>,
            createCounter: <func>
        }
        outer: <null>,              // reference to the global variables
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecore: {
            Type: 'Object',
            c: undefined
        }
        outer: <null>,
        this: <Global Object>
    }    
}
*/

/* creation phase for function
FunctionExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            counter: <uninitialized>,
            <anonimous func>: <ref. to anonimous func>
            Arguments: { length: 0 }
        }
        outer: <GlobalEnvironmentRecord>,             
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecore: {
            Type: 'Declarative',
        }
        outer: <GlobalEnvironmentRecord>,
        this: <Global Object>
    }    
}
// execution phase
FunctionExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            counter: <uninitialized>,
            <anonimous func>: <ref. to anonimous func>
            Arguments: { length: 0 }
        }
        outer: <GlobalEnvironmentRecord>,             
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecore: {
            Type: 'Declarative',
        }
        outer: <GlobalEnvironmentRecord>,
        this: <Global Object>
    }    
}

AnonimousFunctionExecutionContext = {
    LexicalEnvironment: {
        EnvironmentRecord: {
            Type: 'Declarative',
            counter: <uninitialized>,
            Arguments: { length: 0 }
        }
        outer: <CreateCounterexicalEnvironmentRecord>,             
        this: <Global Object>
    },
    VariableEnvironment: {
        EnvironmentRecore: {
            Type: 'Declarative',
        }
        outer: <CreateCounterexicalEnvironmentRecord>,
        this: <Global Object>
    }    
}
*/