const prompt = require('prompt-sync')();

const notaPrimeiroBi = parseFloat(prompt("Insira a nota do primeiro bimestre: "));
const notaSegundoBi = parseFloat(prompt('Insira a nota do segundo bimestre: '));
const notaTerceiroBi = parseFloat(prompt('Insira a nota do terceiro bimestre: '));
const notaQuartoBi = parseFloat(prompt('Insira a nota do quarto bimestre: '));

const media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log('Aguarde enquanto calculamos o resultado');

setTimeout(() => {
    if (media >= 7) {
        console.log(`A média é ${media.toFixed(2)}`);
        console.log('Parabéns, você foi aprovado!');
    } else if (media >= 5.25) {
        console.log(`A média é ${media.toFixed(2)}`);
        console.log('Infelizmente você está de recuperação.');
    } else {
        console.log(`A média é ${media.toFixed(2)}`);
        console.log('Você está reprovado!');
    }
}, 3000);