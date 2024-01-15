
// Object.preventExtensions()

const person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    age: 32
}

Object.preventExtensions(person);

person.city = 'Odesa';         // values can't be added to the object
person.firstName = 'Kate'      // properties can be updated
delete person.age;             // method is not blocking the properties deletion

console.log(person);

console.log(Object.isExtensible(person));    // returns false as we can't add properties to object


// Object.seal()

const person2 = {
    firstName: 'Mary',
    lastName: 'Smith',
    age: 39
}

Object.seal(person2);    // new properties can't be added/deleted BUT existing ones can be changed

person2.city = 'Kyiv'; 
person2.firstName = 'Anna';
delete person2.age

console.log(person2)

console.log(Object.isSealed(person2));    // returns true


// Object.freeze()

const person3 = {
    firstName: 'Mike',
    lastName: 'Lee',
    age: 56
}

Object.freeze(person3);    // new properties can't be added/deleted/updated

person3.city = 'Lviv'; 
person3.firstName = 'Devid';
delete person3.age

console.log(person3)

console.log(Object.isFrozen(person3));    // returns true


// features saved in the descriptor 'features'
// value
// writable - boolean         - if I can change the property
// enumerable - boolean       - if I can address the property
// configurable - boolean     - if I can delete the property

console.log(Object.getOwnPropertyDescriptor(person2, 'age'));
console.log(Object.getOwnPropertyDescriptor(person3, 'age'));

console.log(Object.getOwnPropertyDescriptors(person2));    // returns all features (but I have undefined)

// advanced JS

const person4 = {
    lastName: 'Smith'
}

Object.defineProperty(person4, 'name', {
    value: 'Julia',
    writable: true,
    enumerable: true,
    configurable: false
})
// this is the same as calling two commands:
// person4.firstName = 'Julia'
// Object.freeze(person4);                 // we are freezing not the full object but the property 'firstName'


// enumerable - boolean

for (let key in person4) {
    console.log(key);                   // if this works, the object enumerable = true; if not -> enumerable = false
}

Object.defineProperties(person4, {
    name: {
        value: 'John',
        writable: false,
        enumerable: true,
        configurable: false
    },
    age: {
        value: 55,
        writable: true,
        enumerable: true,
        configurable: false
    },
})

console.log(person4);



// if we create methods inside the person5 as enumerable = false, when we call "for in" for the object, property names 'name' and 'age' will be returned and 
// 'greet' and 'hello' will not

const person5 = {
    name: 'Poul',
    age: 61,
    greet: () => console.log('123'),
    hello: () => console.log('hello')
}

for (let key in person5) {
    console.log(key);
}


// get and set methods can be created in objects and classes

const person6 = {
    name: 'Kyle',
    surname: 'Lear',
    age: 34,
    license: {
        name: 'license name'
    },
    get fullName() {
        return `The full name is ${this.name} ${this.surname}`
    },
    set updateFullName(newFullName) {
        const parts = newFullName.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }
}

console.log(person6.name);
console.log(person6.surname);

person6.updateFullName = 'Mary Doe';
console.log(person6.name);
console.log(person6.surname);


// making object copies

const person7 = person6;
person6.age = 40
console.log(person7.age);     // will return 40 because we didn't copy the object person6 but lined to it


const person8 = { ...person6 }    // spread operator copies only values not the infolded objects (license: {} will not be copied, will be linked)
person6.age = 50
console.log(person8.age);     // will return 40 because we copied the values from the object person6


const person9 = { ...person6, license: {...person6.license } }    // the object license will also be copied in the person9
console.log(person9.license);


// copying object properties

const person10 = Object.assign( {}, person6, person2);     // we are adding properties from 2 objects
console.log(person10);


// accessor

const a = structuredClone( { get foo() { return 'bar'} } );

// we have created the following
// const a = {
//     foo: 'bar',
// }

const b = structuredClone( { foo: () => { return 'bar' } })    // as will not work as structuredClone is working only with accessors like get