
const methodName = 'getAge';

class User {
    static TYPE = 'UserRecord';           // word 'static' means we can call method without new record creation
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    role = 'admin';

    #status = 'active';    // by adding the # we profibit the value to be changed from out of the class

    sayHi() {
        console.log(`Hi ${this.name}`);
    }

    [methodName] () {
        console.log(this.age);
    }
}

class User2 {}

const user = new User('Vasil', 29);
console.log(user);
console.log(user.name);
user.sayHi();

const user2 = new User2();
console.log(user2);

user.status = 'inactive';
console.log(user);

console.log(user[methodName]());

console.log(User.TYPE);    // we have a word 'static' which means we can call the method without user record creation

// classes can inherit another classes' methods

class Animal {
    constructor(nickName) {
        this.nickName = nickName;
    }

    makeSounds() {
        console.log('The animal has sound');
    }

    run() {
        console.log('The animal is running');
    }
    jump() {
        console.log('The animal is jumping');
    }
}

class Cat extends Animal {
    constructor(nickName, breed) {
        super(nickName);            // class Cat doesn't have a nickName but inherits it from the parent class Animal
        this.breed = breed;
    }

    makeSounds() {
        console.log(`${this.nickName} has sound`);
    }

    voice() {
        console.log(`${this.nickName} say meow`);
    }

    fetch() {
        console.log(`${this.nickName} fetch a ball`);
    }
}

const bird = new Animal();
const cat = new Cat('Sam', 'dvor');

console.log(bird);

console.log(cat);

cat.jump();
cat.voice();
cat.makeSounds();    // if parent class and child class have the same method, it's taken from the child class

console.log(cat instanceof Cat);   // returns true

console.log(cat instanceof Animal);   // returns true

console.log(cat instanceof User);   // returns false