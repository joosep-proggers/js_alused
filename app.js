// Andmetüübid

// Primitiivid
// String - sõne, tekst
const name = "Joosep";
console.log(typeof name);

// Number
const age = 17;
console.log(typeof age);

const percent = 50.3;
console.log(typeof percent);

// Boolean
const hasKids = false;
console.log(typeof hasKids);

// Null
const sugoma = null;
console.log(typeof sugoma);

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);

// Objektid - tüübid, mille sisu saab kätte viite kaudu
// Objects - reference types

//Array - list, massiiv
const hobbies = ["heroiin", "gaming"];
console.log(typeof hobbies);

// Object
const person = {
	name: "joe",
	age: 2
};
console.log(typeof person)

// näiteks kuupäeva objekt
const today = new Date();
console.log(typeof today);
console.log(today)