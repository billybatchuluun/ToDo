const addTask = document.getElementById("btnTask");

const addCard = document.getElementsByClassName("add-btn");

const TaskWindow = document.getElementById("modal");

const todoBoard = document.getElementById("todo");

let board1 = document.getElementById("board1");
let board2 = document.getElementById("board2");
let board3 = document.getElementById("board3");
let board4 = document.getElementById("board4");

let board3_cardholder = document.getElementById("cardholder_board3");
let board2_cardholder = document.getElementById("cardholder_board2");
let board1_cardholder = document.getElementById("cardholder_board1");

let newTask = document.getElementById("todo");

const addtaskfunctionprocess = () => {
  //tom div
  let task = document.createElement("div");
  task.classList.add("card");
  newTask.appendChild(task);
  console.log(task);

  //---------start div----------

  let startDiv = document.createElement("div");
  startDiv.classList.add("startDiv");
  const checkBtn = document.createElement("button");
  checkBtn.classList.add("done");
  checkBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  startDiv.appendChild(checkBtn);
  task.appendChild(startDiv);

  checkBtn.addEventListener("click", () => {
    board4.appendChild(task);
  });
  task.remove();

  //----------middle div----------
  const middleDiv = document.createElement("div");
  middleDiv.classList.add("middleDiv");
  task.appendChild(middleDiv);
  //----------tittle text nemeh-------
  const title = document.getElementById("title");
  const taskTitle = document.createElement("h4");
  taskTitle.textContent = title.value;
  middleDiv.appendChild(taskTitle);
  title.value = "";
  TaskWindow.style.display = "none";
  //-----------description text nemeh--------------
  const description = document.querySelector(".description");
  const taskDescription = document.createElement("p");
  taskDescription.textContent = description.value;
  middleDiv.appendChild(taskDescription);
  description.value = "";
  //priority button nemeh

  const prioritySelectRef = document.getElementById("prioritySelect");
  console.log(prioritySelectRef);
  const priorityEl = document.createElement("div");
  priorityEl.classList.add("priority");
  priorityEl.textContent = prioritySelectRef.value;
  console.log("priority", prioritySelectRef.value);
  middleDiv.appendChild(priorityEl);

  //status button

  const statusSelectRef = document.getElementById("statusSelect").value;
  const statusEl = document.createElement("div");
  statusEl.classList.add("status");
  console.log(statusEl);
  console.log(board2);
  statusEl.textContent = statusSelectRef.value;

  console.log("statusSelectRef", statusSelectRef);
  if (statusSelectRef === "todo") {
    // console.log(statusSelectRef);
    console.log("todo deer ortson shuu");
    console.log(task);
    console.log(TaskWindow);
    board1_cardholder.appendChild(task);
  }
  if (statusSelectRef === "inprogress") {
    board2_cardholder.appendChild(task);
  }
  if (statusSelectRef === "stuck") {
    board3_cardholder.appendChild(task);
  }

  console.log(statusSelectRef);

  //end div
  const endDiv = document.createElement("div");
  endDiv.classList.add("endDiv");
  task.appendChild(endDiv);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.addEventListener("click", () => {
    task.remove();
  });
  endDiv.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
  editBtn.addEventListener("click", () => {
    TaskWindow.style.display = "flex";

    title.value = taskTitle.textContent;
    description.value = taskDescription.textContent;
    task.remove();
  });
  endDiv.appendChild(editBtn);
};

for (let i = 0; i < addCard.length; i++) {
  addCard[i].addEventListener("click", function () {
    TaskWindow.style.display = "flex";
  });
}

addTask.addEventListener("click", addtaskfunctionprocess);
