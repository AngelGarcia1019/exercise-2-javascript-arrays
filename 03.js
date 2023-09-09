/**
 * 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente:
 * El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor.
 * Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor
 * elemento de un arreglo.
 */

const dataNums = [10, 40, 30, 20, 15, 5];

let dataNumsSort = [...dataNums].sort((a, b) => a - b);
const minorNumber = dataNumsSort[0];
const biggerNumber = dataNumsSort[dataNumsSort.length - 1];

console.log(`Los números ordenadas son: ${dataNumsSort}`);
console.log(`El numero mayor es: ${biggerNumber}`);
console.log(`El numero menor es: ${minorNumber}`);
