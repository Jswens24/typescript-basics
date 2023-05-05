// type Point = {
//     x: number,
//     y: number
// }
var pt = { x: 34, y: 234 };
var jessica = {
    first: 'Jessica',
    last: 'Swenson',
    nickname: 'Jess',
    id: 65654,
    sayHi: function () {
        return 'hello';
    }
};
jessica.nickname = 'Jessy';
var shoes = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
