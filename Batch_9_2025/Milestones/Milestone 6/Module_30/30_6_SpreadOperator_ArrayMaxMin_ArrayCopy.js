/* ..............
Topic : Spread Operator : Array Max 
............... */

//Topic : Array Max

const maxNum = Math.max(1, 9, 2, 8, 3, 7);

console.log(maxNum);

//...

const arrayNum = [1, 9, 2, 8, 3, 7];

const arrayMaxNum = Math.max(arrayNum);
console.log(arrayMaxNum); // output (Error) : NaN

//...

// Topic : Spread Operator

/* NOTE : 
    # Spread Operator is used in array and object
*/

const arrayNum2 = [1, 9, 2, 8, 3, 7];
console.log(...arrayNum2);

const arrayMaxNum2 = Math.max(...arrayNum2);
console.log(arrayMaxNum2);

/* ..............
Topic : Spread Operator : to Copy  
............... */

/* NOTE : 
    JavaScript : Topic : Primitive Type Variable; Non-Primitive Type Variable (Reference Type Variable);

    # Primitive Type Variable :
        - Numbers (int, long, float, double), string, bool

    # Non-Primitive Type Variable (Reference Type Variable) :
        - array, object    
*/

const a = [10, 20, 30, 40];
console.log("a :" + a + "\n");

const b = a;
console.log("b (After Copy From 'a') : " + a + "\n");

b.push(50);
console.log("b (After Push '50' in 'b') : " + b);
console.log("a (After Push '50' in 'b') : " + a + "\n"); // 'a' and 'b' same reference kae dhore ase, ti 'b' te push korle 'a' teo same value dekhitese.

const c = [...a]; // NOTE : [Spread Operator : Array Elements spread out and only value is taken to copy. For this No Reference has been taken and newly value assigned to 'c' from 'a']

c.push(60);
console.log("c (After Push '60' in 'c') : " + c);
console.log("a (After Push '60' in 'c') : " + a);
console.log("b (After Push '60' in 'c') : " + b + "\n");

const d = [...c]; // copy
console.log("d (After Copy From 'c') : " + d + "\n");

// Spread Operator : advanced
const e = [1111, ...c, 9999]; // add extra element while copy and kono reference dhore rakhe na
console.log("e (After Copy From 'c' and add extra element) : " + e + "\n");
