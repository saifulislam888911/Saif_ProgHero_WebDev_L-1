/* ..............
Topic : Array and String and Object : Loops : For of ; For In
............... */

/* NOTE :
    # Loop : For Of : 
        use on 'Array' and 'String' ;
        not in 'Object'.

    # Loop : For In : 
        use on 'Object'.
*/

// Topic : Array :
// Loop : For Loop

const arrayNumbers = [10, 20, 30, 40];

for (let i = 0; i < arrayNumbers.length; i++) {
  console.log("Array Index No. " + i + " : ");

  console.log(arrayNumbers[i]);
}

console.log("\n");

// Loop : For of

const arrayNumbers_2 = [10, 20, 30, 40];

for (const num of arrayNumbers_2) {
  console.log(num);
}

console.log("\n");

// Topic : String :
// Loop : For of

const stringNumbers = "An apple over the table";

for (const char of stringNumbers) {
  console.log(char);
}

console.log("\n");

// Topic : Object :
// Loop : For of (otional)

const objectInfo_1 = {
  name: "Mr AAA",
  age: 18,
  phone: "012344",
};

const keys = Object.keys(objectInfo_1); // NOTE : ['Properties Name' will be stored as 'Array'.]

console.log(keys); // NOTE : [Output will be shown as 'Array'.]

for (const key of keys) {
  const value = objectInfo_1[key];

  console.log(key, value);
}

console.log("\n");

// Topic : Object :
// Loop : For in

const objectInfo = {
  name: "Mr AAA",
  age: 18,
  phone: "012344",
};

for (const key in objectInfo) {
  const value = objectInfo[key];

  console.log(key, value);
}

console.log("\n");
