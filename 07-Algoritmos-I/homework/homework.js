"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let numberDivisible = 2;
  let numbersFactoresArray = [1];
  while (num !== 1 && num > 0) {
    if (num % numberDivisible === 0) {
      num = Math.floor(num / numberDivisible);
      numbersFactoresArray.push(numberDivisible);
    } else {
      numberDivisible += 1;
    }
  }

  return numbersFactoresArray;
}

function bubbleSort(array) {
  var n, i, k, aux;
  n = array.length;
  console.log(array); // Mostramos, por consola, la lista desordenada
  // Algoritmo de burbuja
  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (array[i] > array[i + 1]) {
        aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
      }
    }
  }
  //console.log(array); // Mostramos, por consola, la lista ya ordenada
  return array;
  // let hayCambio = true;
  // while(hayCambio){
  //hayCambio = false;
  // for (let i = 0; i < array.length; i++){
  //if(array[i] > array[i+1]){
  // let aux = array[i];
  // array[i] = array[i+1];
  // array[i+1] = aux;
  //hayCambio = true;
  // }
  // )
  //}
  //return hayCambio
  //}
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let n = array.length;
  for (let i = 1; i < n; i++) {
    let current = array[i];
    let j = i - 1;
    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let j = 0; j < array.length; ++j) {
    let iMin = j;
    for (let i = j + 1; i < array.length; ++i) {
      if (array[i] < array[iMin]) {
        iMin = i;
      }
    }
    if (iMin !== j) {
      let aux = array[j];
      array[j] = array[iMin];
      array[iMin] = aux;
    }
  }

  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};

// Una vez que llegaste a este punto verificá que todos los tests pasen

// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //
