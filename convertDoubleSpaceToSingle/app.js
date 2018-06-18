/*Escribe una función llamada convertDoubleSpaceToSingle.

Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples.

Ejemplo de entrada:

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"   */

let convertDoubleSpaceToSingle = (str) => {
  let stringCut = str.split("  ");
  let newString = stringCut.join(" ");
  return newString;
}
console.log(convertDoubleSpaceToSingle("string  with  double  spaces"));

/*
o más corto aún
let convertDoubleSpaceToSingle = (str) => {
  let stringCut = str.split("  ");
  return stringCut.join(" ");
}*/