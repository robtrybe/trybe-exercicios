const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sort = (vetor) => {
    vetor.sort((a , b) => {
        return a - b;
    })
}
sort(oddsAndEvens);
console.log(`Os números ${oddsAndEvens.join(',')} se encontram ordenados de forma crescente!`);