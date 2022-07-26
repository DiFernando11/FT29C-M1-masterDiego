"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.length = 1;
  }
  insert(valueToInsert) {
    if (this.value > valueToInsert) {
      if (!this.left) {
        this.left = new BinarySearchTree(valueToInsert);
      } else {
        this.left.insert(valueToInsert);
      }
    } else {
      if (!this.right) {
        this.right = new BinarySearchTree(valueToInsert);
      } else {
        this.right.insert(valueToInsert);
      }
    }
    this.length++;
  }
  size() {
    //return this.length;
    if (!this.left && !this.right) return 1;
    if (this.left && !this.right) return 1 + this.left.size();
    if (!this.left && this.right) return 1 + this.right.size();
    if (this.left && this.right)
      return 1 + this.right.size() + this.left.size();
  }
  contains(value) {
    if (this.value === value) return true;

    if (this.left?.contains(value)) return true;

    if (this.right?.contains(value)) return true;

    return false;
  }
  depthFirstForEach(callBack, order = "in-order") {
    switch (order) {
      case "in-order": {
        this.left?.depthFirstForEach(callBack, order);
        callBack(this.value);
        this.right?.depthFirstForEach(callBack, order);
        break;
      }
      case "pre-order": {
        callBack(this.value);
        this.left?.depthFirstForEach(callBack, order);
        this.right?.depthFirstForEach(callBack, order);
        break;
      }
      case "post-order": {
        this.left?.depthFirstForEach(callBack, order);
        this.right?.depthFirstForEach(callBack, order);
        callBack(this.value);
        break;
      }
    }
  }
  breadthFirstForEach(callBack, queue = []) {
    callBack(this.value);
    if (this.left) queue.push(this.left);
    if (this.right) queue.push(this.right);
    if (queue.length) {
      queue.shift().breadthFirstForEach(callBack, queue);
    }
  }
  sum() {
    if (!this.right && !this.left) return this.value;
    if (!this.right && this.left) return this.value + this.left.sum();
    if (!this.left && this.right) return this.value + this.right.sum();
    if (this.left && this.right)
      return this.value + this.left.sum() + this.right.sum();
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
