const nota = 91;

if(nota < 0 || nota > 100){
  console.log('A nota informada é inválida!');
}else if( nota < 50){
  console.log('F');
}else if(nota >= 50 && nota < 60){
  console.log('E');
}else if(nota >= 60 && nota < 70){
  console.log('D');
}else if(nota >= 70 && nota < 80){
  console.log('C');
}else if(nota >= 80 && nota < 90){
  console.log('B');
}else{
  console.log('A');
}