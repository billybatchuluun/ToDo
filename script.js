const addTask = document.getElementById("btnTask");

const addCard = document.getElementsByClassName("add-btn");

const TaskWindow = document.getElementById("modal");

const todoBoard = document.getElementById("todo");

addTask.addEventListener("click", function () {
  const title = document.getElementById("title");
  console.log(title.value);
  const taskTitle = document.createElement("p");
  taskTitle.textContent = title.value;
  todoBoard.appendChild(taskTitle);
  title.value = "";
  TaskWindow.style.display = "none";
});

for (let i = 0; i < addCard.length; i++) {
  addCard[i].addEventListener("click", function () {
    TaskWindow.style.display = "flex";
  });
}
// const newTask = Document.getElementsByClassName("newTask");

// const list = document.createElement("div");
// TaskWindow.appendChild(list);

// newTask.classList.add(list);

console.log(todoBoard);
