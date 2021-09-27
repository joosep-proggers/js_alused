let val;

const today = new Date();

val = today.getMonth(); // 0 - jaanuar
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

let birthday = new Date('04/10/2004 11:00:00');
birthday = new Date('September 27 2001')

birthday.setMonth(2); //  januar
birthday.setDate(12);
birthday.setFullYear(2069);
birthday.setHours(11);
birthday.setMinutes(32);
birthday.setSeconds(2);

console.log(birthday);
console.log(val);