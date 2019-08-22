const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let toDoText = window.prompt("Enter your new to do" , "");
  if( toDoText ){
	  
	  list.insertAdjacentHTML("beforeend", 
			  `<li class="${classNames.TODO_ITEM}">
			  	<input type="checkbox" class="${classNames.TODO_CHECKBOX}"/>
			  	<span class="${classNames.TODO_TEXT}">${toDoText}</span>
			  	<button type="button" class="${classNames.TODO_DELETE}">Delete</button>
			  </li>`
	  );
	 updateCount();
		 
  } else {
	  alert('To do was cancelled');
  }
  
}

function updateCount() {

	let toDos = document.querySelectorAll("."+classNames.TODO_ITEM);
	let uncheckedToDos = document.querySelectorAll("."+classNames.TODO_CHECKBOX+":not(:checked)");
	
	itemCountSpan.innerHTML = toDos.length;
	uncheckedCountSpan.innerHTML = uncheckedToDos.length;
}

//event triggered by all onchange event triggered inside the list (even for nodes not yet registered)
list.addEventListener("change" , updateCount);

list.addEventListener("click" , event => {
	//trigger only if delete button was clicked, ignore the rest
	if(event.target.matches("." + classNames.TODO_DELETE)){
		let elDelete = event.target.closest("."+classNames.TODO_ITEM)
		list.removeChild(elDelete);
		updateCount();
	}
});

