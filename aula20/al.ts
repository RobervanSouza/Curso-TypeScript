/**
 * arquivo: enumType.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo Tuple'
 * data: 20/06/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#enum
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
 */

// ==> Exemplo 01: Numeric Enums (Enums Numérico)

enum Idioma1 {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}

console.log(Idioma1);

// ==> Exemplo 02: String Enums

enum Dia1 {
  Segunda = "SEG",
  Terca = "TER",
  Quarta = "QUA",
  Quinta = "QUI",
  Sexta = "SEX",
  Sabado = "SAB",
  Domingo = "DOM",
}

console.log(Dia1);

// ==> Exemplo 03: Como podemos acessar um valor de um Enum com uma chave: (usando o const)

const enum ComidaEnum {
  arro = 'arroz',
  feiao= 'feiao',
  carne = 'carne',
}
function ComidaFuncao(c:ComidaEnum) {
  return "nordestina!"
}
console.log(ComidaFuncao(ComidaEnum.arro))

// ==> Exemplo 04: Quando usar enum?!

enum TarefaTodo {
  Inicio,
  Meio,
  Fim
}

const verifica = {
  id : 1,
  status: TarefaTodo.Meio,
  descricao: 'parabens, concluiu a tarefa'
}

if (verifica.status == TarefaTodo.Fim){
console.log('Enviar email')
}else {
  console.log('coclua sua tarefa')
}