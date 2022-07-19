

"use strict";

function BinarioADecimal(num) {
  const data = num.split("").reverse();
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    let factor = 2 ** i;
    result += factor * data[i];
  }
  return result;
}

function DecimalABinario(num) {
  // tu codigo aca
  //dividir num entre dos hasta que llegue a 0
  // quedarme con resultado entero(sin el valor el decimal)
  // ir recordando los restos
  //revertir el orden de los restos y agrupar para devolverlo como string
  let result = "";
  while (num > 0) {
    result = `${num % 2}${result}`;
    num = Math.floor(num / 2);
  }
  return result;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};


