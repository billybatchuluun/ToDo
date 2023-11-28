const addTask = document.getElementById("btnTask");

const addCard = document.getElementsByClassName("add-btn");

const TaskWindow = document.getElementById("modal");

const todoBoard = document.getElementById("todo");

let board1 = document.getElementById("board1");

let newTask = document.getElementById("todo");

addTask.addEventListener("click", function () {
  //tom div
  let task = document.createElement("div");
  task.classList.add("card");
  newTask.appendChild(task);

  //start div

  let start = document.createElement("div");
  const checkBtn = document.createElement("button");
  checkBtn.classList.add("done");
  checkBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  task.appendChild(start);

  //middle div

  const title = document.getElementById("title");
  const taskTitle = document.createElement("h4");
  taskTitle.textContent = title.value;
  task.appendChild(taskTitle);
  title.value = "";
  TaskWindow.style.display = "none";

  const description = document.querySelector(".description");
  const taskDescription = document.createElement("p");
  taskDescription.textContent = description.value;
  task.appendChild(taskDescription);
  description.value = "";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  task.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  task.appendChild(editBtn);
});

for (let i = 0; i < addCard.length; i++) {
  addCard[i].addEventListener("click", function () {
    TaskWindow.style.display = "flex";
  });
}

console.log(todoBoard);
