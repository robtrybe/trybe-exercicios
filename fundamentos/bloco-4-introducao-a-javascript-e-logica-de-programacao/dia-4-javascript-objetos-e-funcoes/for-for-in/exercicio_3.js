const arrayTeste = [2, 4, 6, 7, 10, 0, -3];

function retornaIndiceMenorNumero(vetor) {
  return vetor.indexOf(Math.min(...vetor));
}

console.log(retornaIndiceMenorNumero(arrayTeste));