// Resposta Ex 1
const  indice = 13
let soma = 0
let k = 0

while(k<indice){

k = k + 1;

soma = soma + k;

}

console.log(soma);
//Resposta: 91 <-

// Resposta ex 2
function verificarSequenciaFibonacci(numero) {
    let fib = [0, 1];

    while (fib[fib.length - 1] < numero) {
        let proximoNumero = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(proximoNumero);
    }

    if (fib.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}

// Numero teste
const numero = 22;
console.log(verificarSequenciaFibonacci(numero));

//Resposta ex 3
/*
a- 1, 3, 5, 7, 9
b- 2, 4, 8, 16, 32, 64, 128
c- 0, 1, 4, 9, 16, 25, 36, 49
d- 4, 16, 36, 64, 100
e- 1, 1, 2, 3, 5, 8, 13
f- 2, 10, 12, 16, 17, 18, 19, 20
*/

//Resposta ex 4

/*
Primeira ida:
Ligo o primeiro interruptor por algum tempo e depois desligo.
Ligo o segundo interruptor e deixo ligado.
Deixo o terceiro interruptor desligado.

Segunda ida:
Vou até a sala onde as lâmpadas estão.
Se uma lâmpada estiver acesa, isso indica que o segundo interruptor está conectado a ela. Isso ocorre porque o segundo interruptor foi o único a ficar ligado durante todo o período entre a primeira e a segunda ida.
Se uma lâmpada estiver desligada e estiver quente ao toque, isso indica que o primeiro interruptor está conectado a ela. O primeiro interruptor foi ligado e desligado, então a lâmpada esfriou.
Se uma lâmpada estiver desligada e estiver fria ao toque, isso indica que o terceiro interruptor está conectado a ela. O terceiro interruptor nunca foi ligado.
Dessa forma, usando apenas duas idas até a sala das lâmpadas, você consegue determinar qual interruptor controla cada lâmpada.*/

//Resposta ex 5
function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

// Exemplo de uso
const minhaString = 'matheus';
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida);

