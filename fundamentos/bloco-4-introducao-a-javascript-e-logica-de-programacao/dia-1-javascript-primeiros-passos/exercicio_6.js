let peca = 'dama'
peca =  peca.toLowerCase()

switch(peca){
  case 'rei':
    console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez');
    break;
  case 'dama':
    console.log('Pode andar na horizontal, vertical e diagonal quantas casas forem necessárias, desde que esteja livre');
    break;
  case 'torre':
    console.log('Pode andar na horizontal e vertical quantas casas forem necessárias');
    break;
  case 'bispo':
    console.log('Pode andar na diagonal quantas casas forem necessárias');
    break;
  case 'cavalo':
    console.log('Pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante')
    break;
  case 'peao':
    console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode andar duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua');
    break;
  default:
    console.error('A peça informada não é uma peça de Xadrez');
}