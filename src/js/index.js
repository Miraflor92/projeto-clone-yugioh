/*
COMENTARIO DE MULTILINHA
obj 1:quando clicarmos na seta de avancar temos que mostras o proximo cartao da lista
passo 1 ; sar um jeito de pegar o elemento html da seta avncar
passo 2 dar um jeito de identificar o clique do usuario na seta avancar
passo 3 fazer aoarecer o proximo cartao da lista
passo 4 buscar o cartao7 7que esta selecionado e esconder

objetivo 2 quando clicarmos na seta de voltar temos que mostrar o cartao anterior da lista
passo 1 dar um jeito de pegar o elemento html da seta voltar
passo 2 dar um jeito de identificar o clique do usuario na seta voltar
passo 3 fazer aparecer o cartao anterior da lista
passo 4 buscar o cartao que esta selecionado e esconder
*/

//COMENTARIO DE LINHA


const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;


btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length - 1) {
        return;
    }
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao();
});

btnVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) {
        return;
    }
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
