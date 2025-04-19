"use strict";
let age = 22;
const firstName = 'Gustavo';
const isValid = true;
let idk = 5; // variável sem tipagem para declaração futura, não recomendável
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5]; // Declarando uma lista "number[]"
// Tupla:
const person = [1, "1"];
const peoples = [
    [2, "Jane"],
    [1, "João"]
];
// Intersections (Para declarar dois tipos de variáveis)
const productId = 2;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up; // direction = 1
console.log(age);
