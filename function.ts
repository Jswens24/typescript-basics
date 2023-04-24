// function square(num: number): number {
//     return num * num
// }

// function greet(person: string) {
//     return `Hi there, ${person}`
// }

// greet('Sally')

const doSomething = (person: string, age: number, isFunny: boolean) => {

}

doSomething('Kobe', 24, true)


function greet(person: string = 'stranger'): string {
    return `Hi there, ${person}`
}

greet()
greet('Todd')

function square(num: number): number {
    return num * num
}

square(234)

function rando(num: number) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num
}

const add = (x: number, y: number): number => {
    return x + y
}

const colors = ['red', 'orange', 'yellow']

colors.map(color => {
    return color.toUpperCase()
})

function printTwice(msg: string): void {
    console.log(msg);
    console.log(msg);
}


function makeError(msg: string): never {
    throw new Error(msg)
}

function gameLoop(): never {
    while (true) {
        console.log('GAME LOOP RUNNING');

    }
}