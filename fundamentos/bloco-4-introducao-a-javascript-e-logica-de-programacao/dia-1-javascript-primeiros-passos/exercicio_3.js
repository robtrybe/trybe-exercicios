const num1 = 12;
const num2 = 50;
const num3 = 10;

/* Verificando o maior numero fazendo uso do operador AND(e) otimizado */

if(num1 > num2 && num1 > num3){
  console.log('O maior numero é o '+ num1 );
}else if(num2 > num1 && num2 > num3){
  console.log('O maior numero é o '+ num2 );
}else{
  console.log('O maior numero é o '+ num3 );
}