const arrayTeste = [2, 3, 2, 5, 8, 2, 3,];


function maiorValorRepetido(vetor) {
  const arrayNumerosUnicos = [];
  let numRepeticoes = [];
  vetor.sort();
  
  vetor.forEach(element => {
    if (!arrayNumerosUnicos.some(el => el == element)) arrayNumerosUnicos.push(element)
  });

  arrayNumerosUnicos.forEach((num) => {
    numRepeticoes.push(arrayTeste.lastIndexOf(num) - arrayTeste.indexOf(num))
  })

  return arrayNumerosUnicos[numRepeticoes.indexOf(Math.max(...numRepeticoes))]
}

console.log(maiorValorRepetido(arrayTeste))