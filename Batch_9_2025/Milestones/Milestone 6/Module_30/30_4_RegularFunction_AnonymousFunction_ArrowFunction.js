/* ..............
Topic : Function Declaration // Regular Function
............... */

function addNum(num1 = 0, num2 = 0) {
  const sum = num1 + num2;

  return sum;
}

const sum = addNum(5, 10);
console.log(sum);

//...

function addNum2(num1, num2) {
  return num1 + num2;
}

const sum2 = addNum(5, 10);
console.log(sum2);

//-----------------------

/* ..............
Topic : Function Expression // Anonymous Function
............... */

const addNum3 = function (num1, num2) {
  return num1 + num2;
};

const sum3 = addNum3(10, 20);
console.log(sum3);

//-----------------------

/* ..............
Topic : Arrow Function
............... */

const addNum4 = (num1, num2) => num1 + num2;

const sum4 = addNum4(30, 40);
console.log(sum4);
