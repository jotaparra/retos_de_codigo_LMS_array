/*Escriba una función llamada "filterOddElements".

Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.

Ejemplo:

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5] */

const filterOddElements = (arreglo) => {
  var arreglo_resultado = [];
  for(var i=0; i<arreglo.length; i++){
    if(arreglo[i]%2!=0){
      arreglo_resultado.push(arreglo[i]);
    }
  }

  return arreglo_resultado;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]