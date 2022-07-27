'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let left = [];
  let right = [];
  let auxiliar = [];
  let pivote = array.pop();
  let lengthArray = array.length;
  for (let i = 0; i < lengthArray; i++) {
    if (array[i] <= pivote) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return auxiliar.concat(quickSort(left), pivote, quickSort(right));
}
quickSort([4, 2, 6, 8, 4, 3, 5, 9]);
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  let mitad = parseInt(array.length / 2);
  let leftRecursive = array.slice(0, mitad);
  let left = mergeSort(leftRecursive);
  let rightRecursive = array.slice(mitad, array.length);
  let right = mergeSort(rightRecursive);
  let merge = function (left, right) {
    let datos = [];
    while (left.length > 0 && right.length > 0) {
      datos.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return datos.concat(left).concat(right);
  };
  return merge(left, right);
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
