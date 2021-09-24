const numbers1 = [1,7,8,987,987,312,65,65,8415,9,32,54,87,5,96,8];
const numbers2 = new Array(74,659,124,214,212,1,28);
const dailydiet = ['ketamine', "heroin", "amfetamiin"];
const mixed = [215, true, "amogus", undefined, null, {a:1,b:2}, new Date()];

let val;

val = numbers1.length;
val = Array.isArray(numbers1);

val = numbers1[3];	
numbers1[2] = 60;

val = numbers1.indexOf(987);

val = numbers1.push(12);
val = numbers1.unshift(2603);
val = numbers1.pop();
val = numbers1.shift();

//console.log(numbers1);

//numbers1.splice(1,3);
//numbers1.reverse();

val = numbers1.concat(numbers2);

console.log(numbers1);

val = numbers1.sort(function(x, y){
	return y - x
});

console.log(val);