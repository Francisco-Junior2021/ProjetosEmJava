const taskList = document.getElementById("task-list");
        const taskInput = document.getElementById("task-input");

        taskInput.addEventListener("keyup", function(event) {
            if (event.key === "Enter" && taskInput.value.trim() !== "") {
                addTask(taskInput.value.trim());
                taskInput.value = "";
            }
        });

        function addTask(taskText) {
            const taskItem = document.createElement("li");
            taskItem.className = "task-item";

            const taskTextElement = document.createElement("span");
            taskTextElement.textContent = taskText;

            const removeButton = document.createElement("button");
            removeButton.textContent = "Remover";
            removeButton.addEventListener("click", function() {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(taskTextElement);
            taskItem.appendChild(removeButton);

            taskList.appendChild(taskItem);
        }