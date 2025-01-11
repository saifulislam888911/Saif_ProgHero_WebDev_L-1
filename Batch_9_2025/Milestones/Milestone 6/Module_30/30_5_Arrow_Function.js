/* ..............
Topic : Arrow Function
............... */

// No Parameter

const getPI = () => Math.PI;

console.log(getPI());

//....

const addNum3 = (num1) => num1;

const sum3 = addNum3(10);
console.log(sum3);

//...

const addNum = (num1, num2) => num1 + num2;

const sum = addNum(10, 20);
console.log(sum);

//....

const addNum2 = (num1, num2, num3) => num1 + num2 + num3;

const sum2 = addNum2(10, 20, 30);
console.log(sum2);

//-----------------------

/* ..............
Topic : Arrow Function : for returning object 
............... */

const getAge = (person) => person.age;

const student = {
  name: "Mr AAA",
  age: 16,
};

const age = getAge(student);
console.log(age);

//-----------------------

/* ..............
Topic : Arrow Function : for returning Array
............... */

const getThirdIndexElement = (numbers) => numbers[2];

const thirdIndexElement = getThirdIndexElement([0, 10, 20, 30, 40]);
console.log(thirdIndexElement);

//....

const getFourthIndexElement = (numbers) => numbers[2]; // implicit return keyword declaration(don't need to write 'return' keyword)

const numbersArray = [0, 10, 20, 30, 40];
const FourthIndexElement = getFourthIndexElement(numbersArray);
console.log(fourthIndexElement);

/* ..............
Topic : Arrow Function : large // Multiple tasks added in One Arrow Function
............... */

const cal = (num1, num2) => {
  const sum = num1 + num2;
  const div = num1 / num2;
  const mul = sum * div;

  return mul; // explicit return keyword declaration
};

const result = cal(20, 10);
console.log(result);
