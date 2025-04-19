# Tipagem Dinâmica & Tipagem Estática


## Tipagem dinâmica
- Na tipagem dinâmica, a variável pode ser alterada livremente durante o código.

```
let age;

age = 21;
typeof age

age = '21';
typeof age;
```

## Tipagem estática (Typescript)

- O tipo de uma variável precisa ser declarado.
- Não pode ser alterado durante a execução.
```
let age: number; // Declarando o tipo de uma variável

age = 21;
typeof age

age = '21';
```

Exemplos de linguagens estáticas: **Java, C#, Typescript**
Exemplos de linguagens dinâmicas: **Javascript, Python**