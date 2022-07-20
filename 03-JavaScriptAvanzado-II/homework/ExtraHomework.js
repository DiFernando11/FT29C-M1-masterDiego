String.prototype.repeatify = function (num) {
  let nameString = this;
  let counterString = "";
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      counterString += nameString;
    }
  }
  return counterString;
};
