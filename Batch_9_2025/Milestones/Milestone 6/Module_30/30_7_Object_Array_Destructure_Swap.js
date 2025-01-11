/* ..............
Topic : Object and Array : Destructure 
............... */

// Topic : Object

const studentInfoObject_1 = {
  name: "Mr AAA",
  age: 18,
  phone: "012345678",
};

console.log(studentInfoObject_1.name);
console.log(studentInfoObject_1.age);
console.log(studentInfoObject_1.phone);
console.log("\n");

//...

const studentInfoObject_2 = {
  name: "Mr AAA",
  age: 18,
  phone: "012345678",
};

const studentName = studentInfoObject_2.name;
const studentAge = studentInfoObject_2.age;
const studentPhone = studentInfoObject_2.phone;

console.log(studentName);
console.log(studentAge);
console.log(studentPhone);
console.log("\n");

//...

/* ..............
Topic : Object : Destructuring
............... */

/* NOTE : 
    # Destructure : Object and Array theke kono element simple vabe nea asha.
*/

const studentInfoObject_3 = {
  name: "Mr AAA",
  age: 18,
  phone: "012345678",
};

/* NOTE : 
    Object Destructure : 

    # if Right side is an Object, Left side of Destructuring will be Object as well

    # use Property name as a Varriable that contains the Property Value

    # name -> Property Name
      'Mr AAA' -> Property Value

      Here,
      Property Name will be used as Varriable Name.
      Property Value will be used as Value//Data.

      Varriable Name will be set according to Property Name
      Varriable Value//Data will be set according to Property Value.

    # Varriable Name can be set manually.
      
      exmp:
      const { name:studentName  } = studentInfoObject;
*/
const { name } = studentInfoObject_3;
const { age, phone: contactNumber } = studentInfoObject_3;

console.log(name);
console.log(age);
//console.log(phone); // NOTE : [will show error: 'phone' is not defined; 'phone' (Property Name) is declared as 'contactNumber' (Varriable Name//Alias of Property Name)]
console.log(contactNumber);
console.log("\n");

// ___________________________________________________________

/* ..............
Topic : Array : Destructuring
............... */

const arrayNumbers = [10, 20];

const [firstNumber, lastNumber] = arrayNumbers;

console.log(firstNumber);
console.log(lastNumber);
console.log("\n");

//...

const arrayNumbers_2 = [10, 20, 30, 40, 50];

const [a, , b] = arrayNumbers_2;

console.log(a);
console.log(b);
console.log("\n");

//...

const [, x, , y] = [10, 20, 30, 40, 50];

console.log(x);
console.log(y);
console.log("\n");

//...

let p, q;

[p, q] = [10, 20, 30, 40, 50];

console.log(p);
console.log(q);
console.log("\n");

// Topic : Array : Destructuring (Advanced)

function doubleValue(e, f) {
  return [e * 2, f * 2];
}

const [num_1, num_2] = doubleValue(11, 22);

console.log(num_1);
console.log(num_2);
console.log("\n");

// Topic : Array : Assign Varriable with a different Value

let num1, num2;

[num1 = 0, num2 = 0, num3 = 0] = [1, 2];

console.log(num1);
console.log(num2);
console.log(num3);
console.log("\n");

// Topic : Array : Swap

const k = 1;
const l = 2;

[k, l] = [l, k];

console.log(k);
console.log(l);
console.log("\n");
