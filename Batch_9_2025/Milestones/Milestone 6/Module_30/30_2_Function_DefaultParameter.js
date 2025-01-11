function addNum(num1 = 0, num2 = 0) {
  const sum = num1 + num2;

  return sum;
}

const sum = addNum(5, 10);
console.log(sum);

//-----------------------

function mulNum(num1 = 1, num2 = 1) {
  const mul = num1 * num2;

  return mul;
}

//-----------------------

function fullName(first, last = "") {
  const full = first + " " + last;

  return full;
}

//-----------------------

function arrayItems(items = []) {
  return items;
}

//-----------------------

function objectInfo(info = {}) {
  return objectInfo;
}
