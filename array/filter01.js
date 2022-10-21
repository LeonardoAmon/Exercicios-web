const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false
}));

// Eu que fiz a de baixo e está funcionando

// const filtroDeProdutos = produtos.filter(function(p) {
//     return p.preco > 2000;
// }).filter(function(p) {
//     return p.fragil === true;
// })

// console.log(filtroDeProdutos);

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil));