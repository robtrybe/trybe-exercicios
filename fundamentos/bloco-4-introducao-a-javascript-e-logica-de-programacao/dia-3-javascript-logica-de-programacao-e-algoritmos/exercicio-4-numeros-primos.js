let numerosPrimos = [];
let maiorNumero = undefined;

for (let i = 2; i <= 50; i++) {
  let quantity = 0;
  for (let j = 0; j <= i; j++) {
    if (i % j == 0) quantity++
  }

  if (quantity == 2) {
    if (numerosPrimos.length == 0) {
      numerosPrimos[0] = i;
    } else {
      numerosPrimos[numerosPrimos.length] = i;
    }
  }

  quantity = 0;
}

maiorNumero = numerosPrimos[0];

for(let i = 0; i < numerosPrimos.length ;i++){
    if(numerosPrimos[i] > maiorNumero){
      maiorNumero = numerosPrimos[i];
    }
}

console.log('O maior numero primo entre 2 e 50 é o '+maiorNumero);