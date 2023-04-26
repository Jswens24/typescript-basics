const printName = (person: { first: string; last: string }): void => {
    console.log(`${person.first} ${person.last}`);

}

printName({ first: "Bob", last: 'DoesSports' })

const dog = {
    name: 'Kobuk',
    breed: 'Malamute',
    Age: 5
}

// let coordinate: { x: number, y: number } = { x: 34, y: 2 }

// function randomCoordinate(): { x: number, y: number } {
//     return { x: Math.random(), y: Math.random() }
// }


// printName({ first: 'Mick', last: 'Jagger', age: 473 })
const singer = { first: 'Mick', last: 'Jagger', age: 473 }

printName(singer)

type Point = {
    x: number;
    y: number;
}

let coordinate: Point = { x: 34, y: 2 }

function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random() }
}

function doublePoint(point: Point): Point {
    return { x: point.x * 2, y: point.y * 2 }
}

type MyNum = number;
let age: MyNum = 70

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string }
}

function calculatePayOut(song: Song): number {
    return song.numStreams * 0.0033
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);

}


const mySong: Song = {
    title: 'Firework',
    artist: 'Katy Perry',
    numStreams: 65654,
    credits: {
        producer: "Someone important",
        writer: "Joe Bob"
    }
}

const earnings = calculatePayOut(mySong)
console.log(earnings);

printSong(mySong)


type Animal = {
    name: string;
    species: string;
    color?: string;
}

type User = {
    readonly id: number,
    username: string
}

const user: User = {
    id: 564,
    username: 'doggurl'
}

console.log(user.id);
// user.id = 654564

type Circle = {
    radius: number
}

type Colorful = {
    color: string;
}

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: 'yellow'
}

type Cat = {
    numLives: number;
}

type Dog = {
    breed: string;
}

type CatDog = Cat & Dog & {
    age: number;
}

const chris: CatDog = {
    numLives: 7,
    breed: 'Husky',
    age: 9
}