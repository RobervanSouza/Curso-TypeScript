// ==> Exemplo 01 - Uso de Colchetes:

let frutas16: string[] = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(frutas16[2]);

// ==> Exemplo 02 - Array Object (Objeto Array):

let fruta: Array<string> = ["🍍", "🍊", "🍎", "🍉", "🥭"];
console.log(fruta[3]);

// ==> Exemplo 03 - Adicionando mais strings com método 'push'

let idiomas16: Array<string> = ["Português", "Inglês", "Espanhol", "Francês"];
console.log(idiomas16);
idiomas16.push('alemão');
console.log(idiomas16);


// ==> Exemplo 04 - Identificar tamanho do array - método 'length'

let idiomas12: Array<string> = ["Português", "Inglês", "Espanhol", "Francês", "teste"];

console.log(idiomas12.length);
// ==> Exemplo 05 - Exemplo de Array com Spread Operator

let listaNumeros12 = [0, 1, 2, 3, 4, 5];
const listaNumeros22 =[6, 7, 8, 9, 10]
listaNumeros12.push(...listaNumeros22)
console.log(listaNumeros12)
// ==> Exemplo 06 - Exemplo de Array com laço de iteração

let linguagensArray16: string[] = new Array(
  "JavaScript",
  "Python",
  "PHP",
  "C#"
);
function lacosFor(array:string[]) {
  for (let i = 0; i < array.length; i++) {
  
    console.log(linguagensArray16[i])
    
  }
}
lacosFor(linguagensArray16);