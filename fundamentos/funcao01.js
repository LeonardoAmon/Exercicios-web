// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 7);
imprimirSoma()

// funcao com retorno
function soma(a, b = 5) {
    return a + b;
}

console.log(soma(2, 7));
console.log(soma(2));
console.log(soma());