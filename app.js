const form=document.querySelector("form");
const taskInput=document.querySelector("#task");
const heading=document.querySelector("h4");
const li=document.createElement("li");
const list=document.querySelector("ul");

li.className="collection-item";

taskInput.value = "";

form.addEventListener("submit", addTask);
//taskInput.addEventListener("keydown", runEvent);
//taskInput.addEventListener("keyup", runEvent);
//taskInput.addEventListener("keypress", runEvent);
//taskInput.addEventListener("focus", runEvent);
//taskInput.addEventListener("blur", runEvent);
//taskInput.addEventListener("cut", runEvent);
//taskInput.addEventListener("paste", runEvent);
//taskInput.addEventListener("input", runEvent);

function addTask(e){
//body...

//
li.appendChild(document.createTextNode(taskInput.value));
const link=document.createElement("a");
link.className="secondary-content";
link.appendChild(document.createTextNode("X"));
link.setAttribute("href", "#");
li.appendChild(link);
list.appendChild(li);
//console.log(li);
e.preventDefault();
}

