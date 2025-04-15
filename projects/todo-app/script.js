// Getting all required elements
const taskInput = document.querySelector(".task-input input");
const taskInputBtn = document.querySelector(".task-input button");
const filters = document.querySelectorAll(".filters span");
const clearAll = document.querySelector(".clear-btn");
const taskBox = document.querySelector(".task-box");

// Getting localStorage todo-list
let todos = JSON.parse(localStorage.getItem("todo-list")) || [];
let editId;
let isEditTask = false;

// Set filter active class
filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTasks(btn.id);
    });
});

// Function to show tasks
function showTasks(filter) {
    let li = "";
    if(todos.length > 0) {
        todos.forEach((todo, id) => {
            // If todo status is completed, set isCompleted to checked
            let isCompleted = todo.status === "completed" ? "checked" : "";
            
            if(filter === todo.status || filter === "all") {
                li += `<li class="task ${isCompleted}">
                        <label for="${id}">
                            <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                            <span class="task">${todo.name}</span>
                        </label>
                        <div class="settings">
                            <i onclick="showMenu(this)" class="fas fa-ellipsis-v"></i>
                            <ul class="menu">
                                <li onclick="editTask(${id}, '${todo.name}')"><i class="fas fa-pen"></i>Edit</li>
                                <li onclick="deleteTask(${id})"><i class="fas fa-trash"></i>Delete</li>
                            </ul>
                        </div>
                    </li>`;
            }
        });
    } else {
        li = `<li class="no-tasks">You don't have any tasks here</li>`;
    }
    
    taskBox.innerHTML = li;
}
showTasks("all");

// Show task menu
function showMenu(selectedTask) {
    // Getting task menu div
    let taskMenu = selectedTask.parentElement.querySelector(".menu");
    taskMenu.classList.add("show");
    
    // Removing show class when we click on document
    document.addEventListener("click", e => {
        if(e.target.tagName !== "I" || e.target !== selectedTask) {
            taskMenu.classList.remove("show");
        }
    });
}

// Edit task function
function editTask(taskId, taskName) {
    editId = taskId;
    isEditTask = true;
    taskInput.value = taskName;
    taskInput.focus();
}

// Delete task function
function deleteTask(deleteId) {
    // Removing selected task from array/todos
    todos.splice(deleteId, 1);
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTasks(document.querySelector("span.active").id);
}

// Update task status
function updateStatus(selectedTask) {
    // Getting task name
    let taskName = selectedTask.parentElement.querySelector(".task");
    
    if(selectedTask.checked) {
        taskName.parentElement.parentElement.classList.add("completed");
        // Updating the status of selected task to completed
        todos[selectedTask.id].status = "completed";
    } else {
        taskName.parentElement.parentElement.classList.remove("completed");
        // Updating the status of selected task to pending
        todos[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todo-list", JSON.stringify(todos));
}

// Clear all tasks
clearAll.addEventListener("click", () => {
    // Removing all items from array/todos
    todos = [];
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTasks("all");
});

// Add task event
taskInputBtn.addEventListener("click", () => {
    let userTask = taskInput.value.trim();
    
    if(userTask) {
        if(!isEditTask) { // If isEditTask isn't true
            // If todo isn't exist, add a new task to todos
            let taskInfo = {
                name: userTask,
                status: "pending"
            };
            todos.push(taskInfo); // Adding new task to todos
        } else {
            // Edit existing task
            isEditTask = false;
            todos[editId].name = userTask;
        }
        
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTasks(document.querySelector("span.active").id);
    }
});

// Add task when Enter key is pressed
taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    
    if(e.key === "Enter" && userTask) {
        if(!isEditTask) { // If isEditTask isn't true
            // If todo isn't exist, add a new task to todos
            let taskInfo = {
                name: userTask,
                status: "pending"
            };
            todos.push(taskInfo); // Adding new task to todos
        } else {
            // Edit existing task
            isEditTask = false;
            todos[editId].name = userTask;
        }
        
        taskInput.value = "";
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTasks(document.querySelector("span.active").id);
    }
}); 