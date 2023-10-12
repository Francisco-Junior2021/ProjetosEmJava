document.getElementById("acharBotao").addEventListener("click", function() {
    const numerosInput = document.getElementById("numerosInput").value;
    const separadorInput = document.getElementById("separadorInput").value;

    // Divide a string de números em um array usando o separador
    const numerosArray = numerosInput.split(separadorInput);

    // Remove espaços em branco dos elementos do array
    const numerosLimpos = numerosArray.map(numero => numero.trim());

    // Converte os elementos em números
    const numerosNumeros = numerosLimpos.map(numero => parseFloat(numero));

    if (numerosNumeros.length > 0) {
        // Encontra o maior e o menor número
        const maior = Math.max(...numerosNumeros);
        const menor = Math.min(...numerosNumeros);

        // Exibe os resultados na página
        document.getElementById("maiorNumero").textContent = maior;
        document.getElementById("menorNumero").textContent = menor;
    } else {
        // Se não houver números válidos, exibe uma mensagem de erro
        document.getElementById("maiorNumero").textContent = "Nenhum número válido";
        document.getElementById("menorNumero").textContent = "Nenhum número válido";
    }
});