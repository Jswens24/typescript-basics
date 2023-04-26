var printName = function (person) {
    console.log("".concat(person.first, " ").concat(person.last));
};
printName({ first: "Bob", last: 'DoesSports' });
var dog = {
    name: 'Kobuk',
    breed: 'Malamute',
    Age: 5
};
// let coordinate: { x: number, y: number } = { x: 34, y: 2 }
// function randomCoordinate(): { x: number, y: number } {
//     return { x: Math.random(), y: Math.random() }
// }
// printName({ first: 'Mick', last: 'Jagger', age: 473 })
var singer = { first: 'Mick', last: 'Jagger', age: 473 };
printName(singer);
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var age = 70;
function calculatePayOut(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: 'Firework',
    artist: 'Katy Perry',
    numStreams: 65654,
    credits: {
        producer: "Someone important",
        writer: "Joe Bob"
    }
};
var earnings = calculatePayOut(mySong);
console.log(earnings);
printSong(mySong);
