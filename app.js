const person = {
	firstName: 'Juhan',
	lastName: 'Siberist',
	age: 39,
	email: 'juhan@susmail.ee',
	hobbies: ['muusika', 'pangarööv'],
	aadress: {
		city: "Rapla",
		county: "Raplamaa"
	},
	getBirthYear: function() {
		return 2021 - this.age;
	}
};

let val;

val = person;

val = person.firstName;
// val = person.['lastName'];
val = person.hobbies[1];
val = person.aadress['city'];
val = person.getBirthYear();

const people = [
	{name: 'Juhan', age: 39},
	{name: 'Mati', age: 46},
	{name: 'Jarmo', age:13}
];

val = people;

for(let i = 0; i < people.length; i++){
	console.log(people[i].name);
}

console.log(val)