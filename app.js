
// event elements
const taskList = document.querySelector('ul');
const deleteAllButton = document.getElementById('delete-all');

// click elemendi kustutamiseks
taskList.addEventListener("click", deleteTask);
deleteAllButton.addEventListener("click", deleteAll);

function deleteTask(e) {
	if(e.target.textContent === "X") {
		if(confirm("Are you sure you want to delete this task?")){
			e.target.parentElement.remove();
		}
	}
}


function deleteAll(e) {
	if(e.target.id === "delete-all"){
		if(confirm("Are you sure you want to delete all tasks?")){
			taskList.innerHTML = "";
		}
	}
}