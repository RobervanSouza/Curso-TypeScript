/**
 * arquivo: anyType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Any'
 * data: 27/07/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
 */

// ==> Exemplo 01: Tipo Any
const ab: any = 22;
const bc: any = 'any';
const resulte = ab + bc;
console.log(resulte)
// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente

// let teste;
// teste= 'robervan'; tipo 'any' implicito

// ==> Exemplo 03: Quando devemos usar o tipo any?!
const formulario22: { [campoFomulario: string]: any } = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 34,
};
console.log(formulario22)