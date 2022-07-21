"use strict";

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if (n === 0) return 1;
  return n * nFactorial(n - 1);
}

function iterativaFactorial(n) {
  let acumuladorFactorial = 1;
  for (let i = n; i > 0; i--) {
    acumuladorFactorial *= i;
    console.log(i);
  }
  return acumuladorFactorial;
}

function iterativaFibonacci(n) {
  let arrayFibonacci = [0,1];
    for(let i = 2; i <= n; i++ ){
    arrayFibonacci[i] =  arrayFibonacci[i - 2 ] + arrayFibonacci[i - 1];
    }
    return arrayFibonacci[n];
  }

function nFibonacci(n) {
  if (n < 2) return n;
  return nFibonacci(n - 2) + nFibonacci(n - 1);
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  size() {
    return this.length;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    // elimina el primer elemento y lo retorna ;
    if (this.length !== 0) {
      const returnFist = this.first.value; // 5
      const newFirst = this.first.next;
      this.first = newFirst; // 4
      this.length--;
      return returnFist;
    } else {
      return undefined;
    }
  }
}

const cola = new Queue();
cola.enqueue(3);
cola.enqueue(4);
cola.enqueue(5);
console.log(cola.dequeue());
console.log(cola);

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci,
};
