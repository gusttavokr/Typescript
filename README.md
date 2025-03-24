# {dias} aprendendo Typescript

## Dia 01
Nunca estudei JavaScript, então achei bom o curso ter dado uma salientada em como a sintaxe funciona para poder seguir pro Typescript.

Durante as práticas, percebi que os arquivos dentre as pastas analisam as constantes, mesmo em arquivos separados.

Alguns exemplos do que aprendi:

```
// Função simples de somar
function somatorio (value1, value2){
    return value1 + value2
}

let final = somatorio(2, 2)
```

## Dia 2
**Tipos básicos**

```
const value: string = "Gustavo"
const value: number = 22
const value: Array<string> = ["Felipe", "Gustavo"]
```

- String
- Number
- Boolean
- Array

```
enum PaymentMethods {
    CreditCard,
    DebitCard,
    Transfer
}

// Tupla
const getUserNameAndAge = (user: object): [string, name] => {
    // Definicao da função
}
```

- Enum
- Tuple

```
const value: unknown = "Gustavo"
const value: any = metodoBiblioteca()
```
- Unknown
- Any
- Void

**Tipos customizados**
```
type User = {
    name: string;
    age: number;
    hairColor?: string; // Propriedades opcionais
}

const getUserNameAndAge = (user: object): [string, name] => {
    return [user.name, user.age]
}
```

aaaa

```
const myElement: HTMLDivElement = document.getElementById("asd") as HTMLDivElement
```