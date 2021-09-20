// Muutujad
// var, let, const
// var == let SAMA ASI!!11111!!!!!111!!!11!!1
// var vana ja kuse, let uus ja based


// Deklareerimine
let nimi = "Joosep Elias Tõru";
// Kasutamine
//console.log(nimi);

// muutujale uue väärtuse andmine
//nimi = "Mati Karilaid";
//console.log(nimi);

// lubatud märgid nime loomisel - tähed, numbrid, _, $
// numbriga muutuja nime alustada ei tohi

let $="dolar";
console.log($);

const name = "Joosep Elias Tõru";
console.log(name);

// const ei luba väärtust muuta
//name = "Magnus Aasmäe";

const numbers = [1,2,3,4,5,6,7,8,9];
numbers.push(0)
console.log(numbers);

// objektid
const person = {
	name: "Mati",
	age: 48,
	location: "Harju prison"
}
person.name = "Slaava";
person.age = 26;

console.log(person)