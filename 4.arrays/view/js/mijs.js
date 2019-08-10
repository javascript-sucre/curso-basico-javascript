// spread operator

// Crear un Array
let amigos = ['Félix', 'Sergio'];

console.log(amigos.length);
// 2

// Acceder (por índice) a un elemento Array
var primero = amigos[0];
// Félix

var ultimo = amigos[amigos.length - 1];
// Sergio

// Bucle sobre un Array
amigos.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});
// Félix 0
// Sergio 1

// Añadir elemento al inicio de un Array
var nuevaLongitud = amigos.unshift('José'); // añade al inicio
// ["José","Félix","Sergio"];

// Añadir elemento al final de un Array
var nuevaLongitud = amigos.push('Gary');
// ["José","Félix","Sergio","Gary"];

// Eliminar elemento del inicio de un Array
var primero = amigos.shift(); // elimina José del inicio
// ["Félix","Sergio","Gary"];

// Eliminar elemento del final de un Array
var ultimo = amigos.pop(); // elimina Gary del final
// ["Félix","Sergio"];

// Encontrar el índice de un elemento en el Array
amigos.push('José');
// ["Félix","Sergio","José"];

var pos = amigos.indexOf('José');
// 2

// Eliminar un elemento con el índice de posición
var elementoEliminado = amigos.splice(pos, 1); // así es como se elimina un elemento
// ["Félix","Sergio"];

// Copiar un Array
var copiaSuperficial = amigos.slice(); // esta es la forma de crear una copia
// ["Fresa", "Mango"];

// Ejercicios

// Forma Fácil
function suma(...numeros) {
	let acum = 0
	for(let i = 0; i < numeros.length; i++) {
		acum += numeros[i]
	}
	return acum
}
suma(4, 8, 12, 8954, 7, 9)

// Método que ayuda a resolver el problema de la acumulación
function suma(...numeros) {
	return numeros.reduce(function(acum, numero) {
		acum += numero
		return acum
	}, 0)

}
suma(4, 8, 12, 8954, 7, 9)

// Método que devuelve el doble de los números que pasamos por argumento
function dobles(...numeros) {
	return numeros.map(function(numero) {
		return numero * 2
	})
}
dobles(4, 8, 5, 6, 7, 9)

// Una mejor forma de escribir
const dobles=(...numeros) => numeros.map(numero => numero * 2)
dobles(4, 8, 5, 6, 7, 9)

// Método para encontrar números pares
function pares(...numeros) {
	const resultado = []
	const length = numeros.length
	for(let i = 0; i < length; i++) {
		const numero = numeros[i]
		if (numero % 2 == 0)
			resultado.push(numero)
	}
	return resultado
}
pares(1,2,3,4,5,6,7)

// Una mejor forma de hacerlo es
const pares = (...numeros) => numeros.filter(numero => numero % 2 == 0)
pares(1,2,3,4,5,6,7)