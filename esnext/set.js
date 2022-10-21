// não aceita repeticao/não indexada
const times = new Set()
times.add('Flamengo')
times.add('São Paulo').add('Palmeiras').add('Atletico')
times.add('Vasco')
times.add('Fluminense')

console.log(times);
console.log(times.size);
console.log(times.has('Flamengo'));
times.delete('Vasco')
console.log(times.has('Vasco'));

const nomes = ['Leonardo', 'Julia', 'João', 'Leonardo', 'Elaine']
const nomesSet = new Set(nomes)
console.log(nomesSet);