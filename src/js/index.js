/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML

        Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar me cima dele

        Passo 2 - indentificar o clique no botão

        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão mostrar mais

        Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

// Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele

//Os objetos possuem diversos métodos, e é recomendado pesquisar mais sobre estes métodos

const botaoMostrarProjetos = document.querySelector ('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll ('.projeto:not(.ativo)')

botaoMostrarProjetos.addEventListener('click', () => {
  //Passo 3 - adicionar a classe "ativo" nos projetos escondidos  
    MostrarMaisProjetos();

    //Objetivo 2 - esconder o botão de mostrar mais
    // Passo 1 - pegar o botão mostrar mais no JS para poder verificar quando o usuário clicar em cima dele
    EsconderBotao();
});

function MostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}

function EsconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}
