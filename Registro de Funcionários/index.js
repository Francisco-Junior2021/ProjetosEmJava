const funcionarios = [];
        const listaFuncionarios = document.getElementById("listaFuncionarios");
        const maiorSalarioSpan = document.getElementById("maiorSalario");
        const totalSalariosSpan = document.getElementById("totalSalarios");

        const adicionarButton = document.getElementById("adicionar");
        adicionarButton.addEventListener("click", function () {
            const nomeInput = document.getElementById("nome");
            const salarioInput = document.getElementById("salario");

            const nome = nomeInput.value.trim();
            const salario = parseFloat(salarioInput.value);

            if (nome && !isNaN(salario)) {
                const funcionario = {
                    nome: nome,
                    salario: salario
                };

                funcionarios.push(funcionario);

                const li = document.createElement("li");
                li.textContent = `Nome: ${funcionario.nome}, Salário: ${funcionario.salario}`;
                listaFuncionarios.appendChild(li);

                nomeInput.value = "";
                salarioInput.value = "";

                // Encontra o maior salário
                const maiorSalario = funcionarios.reduce((max, func) => (func.salario > max ? func.salario : max), 0);
                maiorSalarioSpan.textContent = maiorSalario.toFixed(2);

                // Calcula o total de salários pagos
                const totalSalarios = funcionarios.reduce((total, func) => total + func.salario, 0);
                totalSalariosSpan.textContent = totalSalarios.toFixed(2);
            }
        });
    