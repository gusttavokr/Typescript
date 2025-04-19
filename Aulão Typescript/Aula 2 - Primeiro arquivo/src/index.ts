let age : number = 22;
const firstName: string = 'Gustavo'
const isValid: boolean = true
let idk: any = 5 // variável sem tipagem para declaração futura, não recomendável

idk = '12'
idk = true

const ids : number[] = [1,2,3,4,5] // Declarando uma lista "number[]"

// Tupla:
const person: [number, string] = [1, "1"]

const peoples: [number, string][] = [
    [2, "Jane"],
    [1, "João"]
] 

// Intersections (Para declarar dois tipos de variáveis)
const productId: string | number = 2

// Enum
enum Direction {
    up = 1,
    down = 2,
    left = 'Esquerda'
}

const direction = Direction.up // direction = 1

// Type Assertions
const productName: any = "Boné"

//let itemId = productName as string;
let itemId = <string>productName

console.log(age);
