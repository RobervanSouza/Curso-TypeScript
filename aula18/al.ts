/**
 * arquivo: tupleType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */
// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript
let animais: [string, string, number, string, ]
animais = ['porco', 'galinha', 4, 'pipo']
//console.log('animais', animais)

// ==> Exemplo 02 - Acessando o valor da Tupla

let animais1: [string, string, number, string];
animais1 = ["porco", "galinha", 4, "pipo"];
console.log("animais", animais1[1]);
// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)
// ==> Exemplo 04 - Usando Tuplas com Spread Operator
//==> Exemplo 05 - Lista Heterogênea de Tupla:
// ==> Exemplo 06 - Uso de função com Tuplas
// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função
