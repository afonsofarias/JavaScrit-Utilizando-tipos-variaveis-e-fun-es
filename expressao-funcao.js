const estudanteReprovou = function (notaFinal, faltas) {
    if(notaFinal < 7 && faltas > 4) {
        console.log('reprovado');
        return true;
        
    } else{
        console.log('não está reprovado');
        return false;
        
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));