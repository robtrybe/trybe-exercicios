let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];

for(let i = 0 ; i < array.length ; i++){
  if(array[i].length > maiorPalavra.length ){
    maiorPalavra = array[i];
  }
}

console.log('A maior palavra é '+ maiorPalavra );