console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);

aprovados[3] = 'Paulo'
console.log(aprovados[3]);
aprovados.push('Abia');
console.log(aprovados.length);

console.log(aprovados);
aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados);