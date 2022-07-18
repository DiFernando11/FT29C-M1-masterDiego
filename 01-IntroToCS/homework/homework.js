"use strict";
// Supongamos 10101, comenzando de derecha a izquierda, cada 1 o 0 será multiplicado por 2^n en donde n describe la posición en el que se encuentra, siendo el más derecho, la posición 0. El resultado final será la sumatoria de todos ellos.

//  1 | 0   | 1     | 0   | 1
// -- | --- | ----- | ----| ---
// 2^4| 2^3 |  2^2  | 2^1 | 2^0

// Por lo tanto:
// 1x2^4 + 0x2^3 + 1x2^2 + 0x2^1 + 1x2^0 = 16 + 0 + 4 + 0 + 1 = 21

function BinarioADecimal(num) {
  const numConnvertArrayReverse = num.split("").reverse();
  let value;
  let resultConvertDecimal = 0;
  for (let i = numConnvertArrayReverse.length - 1; i >= 0; i--) {
    value = Math.pow(2, i) * numConnvertArrayReverse[i];
    resultConvertDecimal += value;
  }
  return resultConvertDecimal;
}

// En cuanto al pasaje de decimal a binario, debemos dividir por dos y quedarnos con el resto, dicho resto va a ser quien nos marque el binario involucrado.

// Por ejemplo:
// Realizamos la operación inversa, convertimos 21 en binario.

// 21/2 = 10 (resto 1)
// 10/2 = 5 (resto 0)
// 5/2 = 2 (resto 1)
// 2/2 = 1 (resto 0)
// 1/2 = 0 (resto 1)

// Ahora leemos de abajo hacia arriba los restos, al concatenarlos, obtendremos nuestra solución en binario 10101.

function DecimalABinario(num) {
  let resultConvertBinary = "";
  while (num > 0) {
    resultConvertBinary = `${num % 2}${resultConvertBinary}`;
    num = Math.floor(num / 2);
  }
  return resultConvertBinary;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
