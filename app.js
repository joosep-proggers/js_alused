let val;

// document.getElementById();

val = document.getElementById("task-title");

const taskTitle = document.getElementById("task-title");

// Stiili muutmine

taskTitle.style.background = '#333';
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";

// Sisu muutmine

taskTitle.textContent = 'balls';
taskTitle.innerHTML = '<span style="color:red";">balls</span>'

// document.querySelector();

val = document.querySelector('#task-title');
val = document.querySelector('.card-title');
val = document.querySelector('h2');

document.querySelector('li').style.color="blue";

document.querySelector('ul li').style.color="yellow";

document.querySelector('li:nth-child(even)').style.background="#ccc";

console.log(val);