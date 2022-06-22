const angulo1 = 40;
const angulo2 = 45;
const angulo3 = 90;

if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0 ){
  console.error(false);
}else if(angulo1 + angulo2 + angulo3 === 180){
  console.log(true);
}else{
  console.log(false);
}