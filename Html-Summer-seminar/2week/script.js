const todoContainer = document.querySelector(".toDoContainer");
reload();
function todoClicked(event) {
  const todo = event.target.parentNode;
  const todoText = todo.children[1].children[0];
  console.log(todoText);
  todoText.classList.toggle("done");
}

function addTodo(text) {
  const newTodo = document.createElement("div");
  newTodo.className = "todo";

  const newCheck = document.createElement("input");
  newCheck.type = "checkbox";
  newCheck.className = "checkbox";

  const newText = document.createElement("div");
  newText.className = "todoText";

  const spanText = document.createElement("span");
  spanText.className = "text";
  spanText.innerText = text;

  const spanTrash = document.createElement("span");
  spanTrash.className = "trash";
  spanTrash.innerText = "🗑️";

  newText.appendChild(spanText);
  newText.appendChild(spanTrash);

  newTodo.appendChild(newCheck);
  newTodo.appendChild(newText);

  todoContainer.prepend(newTodo);
}

const todoForm = document.querySelector("form");
function getInputAndAdd(event) {
  event.preventDefault();
  const todoInput = document.querySelector(".newTodo");
  addTodo(todoInput.value);
  todoInput.value = "";
  reload();
}
todoForm.addEventListener("submit", getInputAndAdd);

function todoDelete(event) {
  const clickedTodoText = event.target.parentNode.children[0].innerText;
  console.log(clickedTodoText);
  const removeTodo = event.target.parentNode.parentNode;
  const ok = confirm("[" + clickedTodoText + "]을/를 삭제하시겠습니까?");
  if (ok) {
    removeTodo.remove();
  }
  if (document.getElementsByClassName("todo").length === 0) {
    alert("할 일이 없으신가요? ㅠㅠ");
  }
}
function reload() {
  let checkboxes = document.querySelectorAll(".checkbox");
  let trashIcons = document.querySelectorAll(".trash");
  console.log(checkboxes);
  checkboxes.forEach((element) => {
    element.addEventListener("click", (event) => todoClicked(event));
  });

  trashIcons.forEach((element) => {
    element.addEventListener("click", (event) => todoDelete(event));
  });
}
