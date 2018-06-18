/*Escriba una función llamada computeSumOfAllElements.

Dado un array de números, computeSumOfAllElements devuelve la suma de todos los elementos del array dado.

Ejemplo:

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6*/

//Se puede hacer con REDUCE

const computeSumOfAllElements = (arr) => {
  const newElement = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  return newElement;
}

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output);
