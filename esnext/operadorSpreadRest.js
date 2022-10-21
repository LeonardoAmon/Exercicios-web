// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12438.76 }
const clone = { ativo: true, ...funcionario }
console.log(clone);

// usar spread com array
const grupoA = ['João', 'Elaine', 'Leonardo']
const grupoFinal = ['Julia', ...grupoA, 'Alceny']
console.log(grupoFinal);