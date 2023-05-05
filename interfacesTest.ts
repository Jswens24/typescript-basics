// type Point = {
//     x: number,
//     y: number
// }

// const pt: Point = { x: 65, y: 684 }

interface Point {
    x: number;
    y: number;
}

const pt: Point = { x: 34, y: 234 }

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    // sayHi: () => string;
    sayHi(): string;
}

const jessica: Person = {
    first: 'Jessica',
    last: 'Swenson',
    nickname: 'Jess',
    id: 65654,
    sayHi: () => {
        return 'hello'
    }
}

jessica.nickname = 'Jessy'


interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4));

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const kobuk: Dog = {
    name: 'Kobuk',
    age: 5,
    breed: 'Alaskan Malamute',
    bark() {
        return 'WOOF WOOF!'
    }
}

interface ServiceDog extends Dog {
    job: 'drug sniffer' | 'bomb' | 'guide dog';
}

const betty: ServiceDog = {
    name: 'Betty',
    age: 5,
    breed: 'Husky Poodle',
    bark() {
        return 'Bark'
    },
    job: 'drug sniffer'
}

interface Human {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Human, Employee {
    level: string;
    languages: string[];
}

const patty: Engineer = {
    name: 'Patty',
    id: 5465,
    email: 'patty@email.com',
    level: 'senior',
    languages: ['JS', 'Python']
}