let movieTitle: string = 'Sandlot';
movieTitle = 'Bad News Bears';
// movieTitle = 4;
movieTitle.toUpperCase();

let myNumber: number = 42;
const myBoolean: boolean = true;

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = 'zero'

let gameOver: boolean = false;
gameOver = true;
// gameOver = 'true'

let nothing: null = null;
let foo: undefined = undefined;

let tvShow = 'Gold Rush';
tvShow = 'Love After Lockup';
// tvShow = false;

let isFunny = false;
isFunny = true;
// isFunny = 'asd'

let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();

// let something: string = "hello";
// something = 1;
// something = false;
// something();
// something.toUpperCase();

const movies = ["The Green Mile", "Fight Club", "Ant Man", "Happy Gilmore"];
let foundMovie: string;

for (let movie of movies) {
    if (movie === 'Happy Gilmore') {
        foundMovie = 'Happy Gilmore'
    }
}

// foundMovie();
// foundMovie = 1;
// foundMovie.asdfsadf();