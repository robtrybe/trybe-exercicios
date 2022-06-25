const custo = 100;
const valorVenda = 300;
let valorImposto = 0;
let valorCustoTotal = 0;
let lucro = 0;


if (custo < 0 || valorVenda < 0) {
  console.log('Valores informados para o calculo são inválidos!');
} else {
  valorImposto = custo * 0.2;
  valorCustoTotal = custo + valorImposto;
  lucro = ( valorVenda - valorCustoTotal ) * 1000;
  console.log('Meu lucro total sobre 1000 peças será de R$ '+ lucro +'.');
}

