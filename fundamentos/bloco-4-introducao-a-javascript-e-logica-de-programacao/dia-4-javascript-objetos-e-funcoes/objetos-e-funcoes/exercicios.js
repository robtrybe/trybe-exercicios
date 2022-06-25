let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem Vinda, ${info.personagem}`);
console.log('-------------------------------');

info.recorrente = 'Sim';

console.log(info);
console.log('-------------------------------');

for(chave in info){
  console.log(chave);
}

console.log('-------------------------------');

for(chave in info){
  console.log(info[chave]);
}

console.log('-------------------------------');

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for(chave in  info){
  console.log(info[chave] + ' e '+ info2[chave]);
}

console.log('-------------------------------');

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log(`O livro de ${leitor.nome} ${leitor.sobrenome} se chama \'${leitor.livrosFavoritos[0].titulo}\'`);

console.log('-------------------------------');

leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length } livros favoritos`);



