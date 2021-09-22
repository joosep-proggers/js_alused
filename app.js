let val;

// -> string, muudame val stringiks

val = String(555);
val = String(4-4);
val = String(5.6);

// boolean -> string

val = String(true);
val = String(false);

// objekt -> string
val = String(new Date());

// massiiv -> string
val = String([4,3,2,1]);

// alternatiiv .toString()
val = (5).toString();
val = (true).toString();

// string -> number

val = Number("5");

// boolean -> number
val = Number(true);
val = Number(false);

// null -> number
val = Number(null);

// tekst -> number EI TÖÖTA D: D: D: D:
val = Number("tere");

// massiiv -> number EI TÖÖTA D: D: D: D:
val = Number([1,2,3,]);

// string -> number
val = parseInt("100.30");
val = parseFloat("100.30");

console.log(typeof val);
console.log(val)