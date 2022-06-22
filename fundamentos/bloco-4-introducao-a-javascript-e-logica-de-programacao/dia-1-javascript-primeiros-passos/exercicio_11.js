let salario = 3000;
let aquilotaINSS = 0;
let aquilotaIR;
let parcela;

if(salario <= 1556.94){
  aquilotaINSS = 0.08;
}else if(salario >= 1556.95  && salario <= 2594.92){
  aquilotaINSS = 0.09;
}else if(salario >= 2594.93 && salario <= 5189.82){
  aquilotaINSS = 0.11;
}else{
  aquilotaINSS = 570.88;
}

if(salario > 5189.82){
  salario = salario - aquilotaINSS;
}else{
  salario = salario - ( salario * aquilotaINSS );
}

if(salario <= 1903.98){
  aquilotaIR = 0;
  parcela = 0;
}else if( salario >= 1903.99 && salario <= 2826.65 ){
  aquilotaIR = 0.075;
  parcela = 142.80;
}else if( salario >= 2826.66 && salario <= 3751.05 ){
  aquilotaIR = 0.15;
  parcela = 354.80;
}else if( salario >= 3751.06 && salario <= 4664.68 ){
  aquilotaIR = 0.225;
  parcela = 636.13;
}else{
  aquilotaIR = 0.275;
  parcela = 869.36;
}

if(salario <= 1903.98 ){
  console.log('O salário liquido é de '+ salario );
}else{
  salario = salario - (( salario * aquilotaIR ) - parcela);
  console.log('O salario liquido é de ' + salario);
}


