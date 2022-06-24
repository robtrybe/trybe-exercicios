const angulo1 = 45;
const angulo2 = 45;
const angulo3 = 90;

if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0 ){
  console.log('Um dos angulos informados é inválido!');
}else if(angulo1 + angulo2 + angulo3 === 180){
  console.log(true);
}else{
  console.log(false);
}

// 5 = Verdadeiro
// 0 = false
// '0' = vardadeiro
//0 false

let num = 0

if(num){
  console.log(true)
}else{
  console.log(false)
}