const arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function retornaMaiorNome(vetor) {
  let tamanhoDoMaiorNome = vetor[0].length;
  let maiorNome = null;
  vetor.forEach((nome) => {
    if (tamanhoDoMaiorNome < nome.length) {
      tamanhoDoMaiorNome = nome.length;
      maiorNome = nome;
    }
  });
  return maiorNome;
}

console.log(retornaMaiorNome(arrayNomes));