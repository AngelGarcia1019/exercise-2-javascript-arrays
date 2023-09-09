/**
 * 2. El usuario deberá ingresar un string con varias palabras separadas por coma
 * en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5'
 * y se convierte en [1,2,3,4,5]).
 * Mostrar en consola dicho resultado.
 */

let dataInput = prompt(
  'Introduce un cadena con palabras separadas por coma \nEjemplo: "1,2,3,4,5"'
);

let convertInputArray = dataInput.split(",");

console.log(`Result converted: ${dataInput}`);
