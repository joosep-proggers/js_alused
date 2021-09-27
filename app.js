/*
if(tingimus) {
	// tegevused if puhul
} else {
	// tegevused else puhul
}
*/

const id = 100;

// == - võrdub
// != - ei võrdu
// === võrdub ja tüübikontroll
// !== ei võrdu ja tüübikontroll


/*
let testID;

console.log(testID);

if(typeof testID !== 'undefined'){
	console.log(`id on ${testID}`);
} else {
	console.log('ID puudub');
}
*/

/*
if(id > 100){
	console.log(`id on ${id} - suurem kui 100`);
} else {
	console.log(`id on ${id} - väiksem või võrdne 100`);
}
*/

// if - else if - else

/*
const color = "blu";

if(color === "red"){
	console.log("stop");
} else if(color === "yello"){
	console.log("ATentison!!!1");
} else if (color === "greem"){
	console.log("Go");
} else {
	console.log("mis kuradi ristmikul sa oled");
}
*/

// and - &&
const name = "Vello";
const age = "13";

if(age > 0 && age <= 16){
	console.log(`${name} on laps`)
} else if (age > 16 && age < 18){
	console.log(`${name} on nooruk`)
} else {
	console.log(`${name} on täiskasnvanu`)
}

// or - ||

if(age < 18 || age > 65){
	console.log(`${name} ei saa registreerida`)
} else {
	console.log(`${name} on registreeritud`)
}

// ? - ternary operator

console.log(id === 100 ? 'Õige' : 'Vale');

// ilma {}
if(id === 100) console.log('Korras');
else console.log('Ei ole korras');