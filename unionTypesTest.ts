let age: number | string | boolean = 21
age = 23
age = '24'
age = true


type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = { x: 1, y: 34 }
coordinates = { lat: 321.123, long: 23.355 }

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

printAge(23)
printAge('23')

function calculateTax(price: number | string, tax: number) {
    if (typeof price === 'string') {
        price = parseFloat(price.replace('$', ''))
    }
    return price * tax
}


const nums: number[] = [1, 2, 3, 4]
// const stuff: any[] = [1, 2, 3, 'asdf', true]

const moreStuff: (number | string)[] = [1, 2, 3, 4, 'asdf']

const coords: (Point | Loc)[] = []
coords.push({ lat: 23132, long: 23.5564 })
coords.push({ x: 23132, y: 23.5564 })


let zero: 0 = 0
let hi: 'HI!' = 'HI!'

let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad'

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
let today: DayOfWeek = 'Monday'
