document.querySelector("form").addEventListener("submit", handleSubmitForm);
document
  .querySelector("ul")
  .addEventListener("click", handleClickForDeleteCheck);

function handleClickForDeleteCheck(e) {
  e.stopPropagation();
  if (e.target.name == "check") {
    checkTodo(e);
  }
  if (e.target.name == "delete") {
    e.stopPropagation();

    deleteTodo(e);
  }
}

function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") {
    addTodo(input.value);
    input.value = "";
  }
}
function addTodo(val) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `
  <span class="todo-item">${val}</span>
  <button type="button" name="check" value="check" >check</button>
  <button type="button" name="delete" value="delete" >delete</button>
  `;
  li.classList.add("todo-list-item");
  ul.appendChild(li);
}

function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == "line-through") {
    item.style.textDecoration = "none";
  } else {
    item.style.textDecoration = "line-through";
  }
}
function deleteTodo(e) {
  let item = e.target.parentNode;
  item.remove();
}
