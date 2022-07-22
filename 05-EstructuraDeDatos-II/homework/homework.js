"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

//function LinkedList() {}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = {
      value: null,
      next: null,
    };
    this.length = 0;
  }
  ///agregar en cualquier posicion ejemplo "VALUE: "hear", posicion: index, function("hear", 3)
  // addInPosition(){}
  add(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  remove() {
    // vamos a eliminar el ultimo elemento de la lista
    const currentValue = this.tail.value;
    if (this.length === 0) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.length--;
      return currentValue;
    }
    let newTail = this.getTheIndex(this.length - 2);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return currentValue;
  }
  getTheIndex(index) {
    // devuelve el nodo en el indice que indiques
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  search(value) {
    const isSameValue = (currentNode) => {
      return typeof value === "function"
        ? value(currentNode.value)
        : currentNode.value === value;
    };

    let counter = 0;
    let currentNode = this.head;
    do {
      if (isSameValue(currentNode)) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
      counter++;
    } while (counter !== this.length);
    return null;
  }
  addAnywhere(value, index) {
    const newNode = new Node(value);
    if (index > this.length) {
      return `No se encuentra la posicion en linkedList: posiciones ${this.length + 1}`;
    }
    if (index === 0) {
      let currentNodeHead = this.head;
      this.head = newNode;
      this.head.next = currentNodeHead;
      return this;
    }

    if (index === this.length) {
      this.add(newNode);
      return this;
    }

    let previousNode = this.getTheIndex(index - 1);
    let nextNode = this.getTheIndex(index);
    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return this;
  }
}

//function Node(value) {}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

//function HashTable() {

//}
class HashTable {
  constructor() {
    this.numBuckets = 35;
    this.numBucketsArray = new Array(this.numBuckets);
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.numBucketsArray.length;
    }
    return hash;
  }
  set(key, value) {
    if (typeof key === "string") {
      const address = this.hash(key);
      if (!this.numBucketsArray[address]) {
        this.numBucketsArray[address] = [];
      }
      const currentBucket = this.numBucketsArray[address];
      if (currentBucket) {
        for (let i = 0; i < currentBucket.length; i++) {
          if (currentBucket[i][0] === key) {
            return (currentBucket[i][1] = value);
          }
        }
      }
      this.numBucketsArray[address].push([key, value]);
      return this.numBucketsArray[address];
    } else {
      throw new TypeError("Keys must be strings");
    }
  }
  get(key) {
    const address = this.hash(key);
    const currentBucket = this.numBucketsArray[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  hasKey(key) {
    let valorBoolean = false;
    const address = this.hash(key);
    const currentBucket = this.numBucketsArray[address];
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        valorBoolean = true;
      }
    }
    return valorBoolean;
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
