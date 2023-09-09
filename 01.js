/**
 * 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array.
 * Mostrar en consola el resultado del array.
 */

let myNums = [];

for (let i = 0; i < 10; i++) {
  myNums[i] = Math.random();
}

console.log(myNums);
