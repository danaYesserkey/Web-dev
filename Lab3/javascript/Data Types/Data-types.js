// no error
let message = "hello";
message = 123456;
// Number
let n = 123;
n = 12.345;
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "not a number" / 2 ); // NaN, such division is erroneous
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN
//BigInt
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
//String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3
//Boolean (logical type)
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")
//null
let age = null;

//String quotes
let name = "Ilya";

alert( `hello ${1}` );

alert( `hello ${"name"}` );

alert( `hello ${name}` );
