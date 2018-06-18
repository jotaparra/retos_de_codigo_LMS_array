/*Escriba una función llamada getNthElement.

Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.

Notas:

Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
Ejemplo de entrada:

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3                 */

const getNthElement = (array, n) => {
  if (array.length === 0) {
    return undefined
  }
  
  for (var i = 0; i < array.length; i++) {
    if (n === i) {
      return array[i]
    }
  }
 }
 var output = getNthElement([1,2,3,4,5], 1);
 console.log(output);