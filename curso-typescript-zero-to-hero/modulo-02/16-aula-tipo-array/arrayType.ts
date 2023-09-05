/**
 * arquivo: arrayType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Array'
 * data: 28/03/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#array
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01 - Uso de Colchetes:

let frutas: string[] = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[2]);

// ==> Exemplo 02 - Array Object (Objeto Array):

let frutas1: Array<string> = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas1[3]);

// ==> Exemplo 03 - Adicionando mais strings com método 'push'

let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];


// ==> Exemplo 04 - Identificar tamanho do array - método 'length'

let idiomas1: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês'];


// ==> Exemplo 05 - Exemplo de Array com Spread Operator

let listaNumeros = [0, 1, 2, 3, 4, 5];


// ==> Exemplo 06 - Exemplo de Array com laço de iteração

let linguagensArray:string[] = new Array('JavaScript', 'Python', 'PHP', 'C#');

