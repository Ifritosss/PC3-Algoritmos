const prompt = require('prompt-sync')({ sigint: true });
let array = [];

function insertx(input) {
    array.push(input);
}

function removex(removidos) {
    let filtrado = array.filter((x, index) => index == removidos);
    if (array.length == 0){
        console.log(`Essa fila está vazia, favor insira um elemento \n`);
    } else if (filtrado.length == 0){
        console.log(`Valor inserido não consta na fila \n`);
    } else {
        array = array.filter((x, index) => index != removidos);
    }
}

let input = prompt(`declare o elemento a ser inserido: \n\n`);
insertx(input);
console.log(array);

let input2 = parseInt(prompt(`declare o numero do elemento na lista que deseja remover: \n\n`));
removex(input2);
console.log(array);