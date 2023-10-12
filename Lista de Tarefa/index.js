const tarefaInput = document.getElementById("tarefaInput");
        const listaTarefas = document.getElementById("listaTarefas");

        tarefaInput.addEventListener("keyup", function(event) {
            if (event.key === "Enter" && tarefaInput.value.trim() !== "") {
                adicionarTarefa(tarefaInput.value);
                tarefaInput.value = "";
            }
        });

        function adicionarTarefa(textoTarefa) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${textoTarefa}</span>
                <button class="remove-button">Remover</button>
            `;

            const removeButton = li.querySelector(".remove-button");
            removeButton.addEventListener("click", function() {
                li.remove();
            });

            listaTarefas.appendChild(li);
        }
        const tarefaInput = document.getElementById("tarefaInput");
        const listaTarefas = document.getElementById("listaTarefas");
        const tarefas = [];

        tarefaInput.addEventListener("keyup", function(event) {
            if (event.key === "Enter" && tarefaInput.value.trim() !== "") {
                adicionarTarefa(tarefaInput.value);
                tarefaInput.value = "";
            }
        });

        function adicionarTarefa(textoTarefa) {
            tarefas.push(textoTarefa); // Adiciona a tarefa ao array
            atualizarListaTarefas();
        }

        function atualizarListaTarefas() {
            listaTarefas.innerHTML = ""; // Limpa a lista de tarefas

            tarefas.forEach(function(textoTarefa, index) {
                const li = document.createElement("li");
                li.innerHTML = `
                    <span>${textoTarefa}</span>
                    <button class="remove-button" data-index="${index}">Remover</button>
                `;

                const removeButton = li.querySelector(".remove-button");
                removeButton.addEventListener("click", function() {
                    const index = parseInt(removeButton.getAttribute("data-index"));
                    tarefas.splice(index, 1); // Remove a tarefa do array
                    atualizarListaTarefas();
                });

                listaTarefas.appendChild(li);
            });
        }