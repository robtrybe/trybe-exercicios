function palindromo(palavra){
  let palavraInvertida = '';
  for(let i = palavra.length - 1 ; i >= 0 ;i--){
    palavraInvertida += palavra[i];
  }

  if(palavra == palavraInvertida){
    return true;
  }else{
    return false;
  }
}

console.log(palindromo('anajulia'))