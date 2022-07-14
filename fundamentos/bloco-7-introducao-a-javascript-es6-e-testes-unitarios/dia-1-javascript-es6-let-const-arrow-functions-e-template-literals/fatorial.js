const fatorial = (numero) => {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let result = numero;
    for (let i = numero; numero > 1; numero -= 1) {
        result *= numero - 1;
    }

    return result;
}

console.log(fatorial(2));