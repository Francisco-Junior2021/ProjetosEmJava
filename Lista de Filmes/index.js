// Verifica se o método 'includes' já está definido no navegador
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

const filmes = [
    {
        "titulo": "Dawn of the Planet of the Apes",
        "lancamento": 2014,
    },
    {
        "titulo": "District 9",
        "lancamento": 2009,
    },
    {
        "titulo": "Transformers: Age of Extinction",
        "lancamento": 2014,
    },
    {
        "titulo": "Ultravioleta",
        "lancamento": 2006,
    },
    {
        "titulo": "O Retorno da Múmia",
        "lancamento": 2016,
    },
    // ... outros filmes ...
];

const filtroInput = document.getElementById("filtroInput");
const listaFilmes = document.getElementById("listaFilmes");

function exibirFilmes(filmes) {
    listaFilmes.innerHTML = "";

    filmes.forEach(filme => {
        const li = document.createElement("li");
        li.textContent = filme.titulo;
        listaFilmes.appendChild(li);
    });
}

filtroInput.addEventListener("keyup", function () {
    const textoFiltro = filtroInput.value.toLowerCase();

    const filmesFiltrados = filmes.filter(filme =>
        filme.titulo.toLowerCase().includes(textoFiltro)
    );

    exibirFilmes(filmesFiltrados);
});

// Exibir todos os filmes inicialmente
exibirFilmes(filmes);

    
   