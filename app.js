const name = "josep";
const surname = "joseb";
const age = 1353;
const message = "ma olen serbias tagaotsitav.";
const hobid = "zolpadein, kodeiin, heroiin, kokaiin, metamfetamiin";

let val;

// concatenation
val = name + " " + surname

// append
val = "josep";
val += " " + surname;

val = message + " Minu tegevusalad on " + hobid;

// escaping \

val = "See on \'jutumärkides\'"

// suuruse muutmine

val = hobid.toUpperCase();

val = surname[0];
val = surname.indexOf('j');
val = surname.lastIndexOf('b');
val = surname.charAt(2);
val = surname.charAt(surname.length - 1);

val = surname.substring(0,3);
val = surname.slice(0, 3);
val = surname.slice(-2);

val = hobid.split(',');

console.log(val)