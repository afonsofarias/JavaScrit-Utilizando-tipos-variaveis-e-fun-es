const estaAprovado = true
const idadeMinima = 18;
const idadeEstudante = 16;

if (estaAprovado === true) {
    console.log('aprovado');
  }

if ("0" == 0) {
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }

if ("0" === 0) {
    console.log('Passou na comparação');
  } else {
    console.log('Não passou na comparação');
  }
  
  if (idadeEstudante >= idadeMinima) {
    console.log('não precisa de autorização');
  } else {
    console.log('precisa de autorização');
  }