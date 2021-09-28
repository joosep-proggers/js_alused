// for tsükkel

console.log("For tsükkel")
for(let i = 0; i < 10; i++){
	if(i==5){
		// break;
		continue;
	}
	console.log(i)
}

// while tsükkel :D

console.log("While tsükkel");

let i = 0;

while(i < 10){
	console.log(i);
	i++;
}

// do while tsükkel

console.log("Do while tsükkel");

let j = 0;
do {
	console.log(j)
	j++;
} while(j < 10);

// tsüklid ja massiivid

console.log("Massiivid ja tsüklid")
const cars = ["Ford","Toyota","Honda"];

// for tsükliga
console.log("For tsükliga");
console.log();

for(let i=0; i < cars.length; i++){
	console.log(cars[i]);
};

// forEach - callback function
console.log("forEach tsükkliga");
console.log();

cars.forEach(function(element, index){
	console.log(`cars[${index}] = ${element}`);
});

// forEach -  (arrow) => function
console.log("forEach tsükkliga");
console.log();

cars.forEach((element, index) => {
	console.log(`cars[${index}] = ${element}`);
});

console.log();

// Tsüklid ja objektid
const crewmate = {
	colour: 'Red',
	impostor: false,
	susMeter: 57
};

// for in tsükkel
for(let key in crewmate){
	console.log(`${key} = ${crewmate[key]}`);
}