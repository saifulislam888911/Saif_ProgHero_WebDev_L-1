/* ..............
Topic : Object and Array : Keys, Values, Entries, Delete, Seal, Freeze
............... */

// Topic : Object

const objectInfo = {
  name: "Mr AAA",
  age: 18,
  phone: "012345",
};

console.log("Object : ");
console.log(objectInfo);
console.log("\n");

// Topic : Object : keys
// NOTE : 'keys' output will return as 'Array'

const objectInfo_2 = {
  name: "Mr AAA",
  age: 18,
  phone: "012345",
};

const keys = Object.keys(objectInfo_2);

console.log("Object - Keys (Object - Property Name) : ");
console.log(keys);
console.log("\n");

// Topic : Object : values
// NOTE : 'values' output will return as 'Array'

const objectInfo_3 = {
  name: "Mr AAA",
  age: 18,
  phone: "012345",
};

const values = Object.values(objectInfo_3);

console.log("Object - Values (Object - Property Value) : ");
console.log(values);
console.log("\n");

// Topic : Object : entries
// NOTE : [Entries will return 'Array of Array'//'2 Dimentional Array'.]

const objectInfo_4 = {
  name: "Mr AAA",
  age: 18,
  phone: "012345",
};

const entries = Object.entries(objectInfo_4);

console.log("Object - Entries (Pair : Property Name, Property Value) : ");
console.log(entries);
console.log("\n");
