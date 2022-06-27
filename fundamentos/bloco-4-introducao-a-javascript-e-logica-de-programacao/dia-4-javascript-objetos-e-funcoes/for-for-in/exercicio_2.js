const arrayTeste = [2, 3, 6, 7, 10, 1];

function retorneIndiceDoMaior(vetor) {
  return vetor.indexOf(Math.max(...vetor));
}

console.log(retorneIndiceDoMaior(arrayTeste));

