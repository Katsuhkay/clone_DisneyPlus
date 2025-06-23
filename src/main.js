// JavaScript corrigido
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    // Adiciona evento de clique a cada botão de aba
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Corrigido: usando currentTarget em vez de target para pegar sempre o botão
            const abaAlvo = event.currentTarget.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            
            // Remove a classe ativa de todas as abas
            escondeTodasAbas();
            // Remove a classe ativa de todos os botões
            removeActiveButtons();
            
            // Adiciona classe ativa na aba clicada
            aba.classList.add('shows__list--is--active');
            // Adiciona classe ativa no botão clicado
            event.currentTarget.classList.add('shows__tabs__button--is--active');
        });
    });
});

// Esconde todas as abas de conteúdo
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach(tab => {
        tab.classList.remove('shows__list--is--active');
    });
}

// Remove a classe ativa de todos os botões
function removeActiveButtons() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach(button => {
        button.classList.remove('shows__tabs__button--is--active');
    });
}

// Seção do FAQ - Efeito Sanfona
const faqQuestions = document.querySelectorAll('[data-faq-question]');

faqQuestions.forEach(question => {
    question.addEventListener('click', abreOuFechaResposta);
});

function abreOuFechaResposta(elemento) {
    // Pega o elemento clicado (a pergunta)
    const classe = 'faq__questions__item--is--open';
    const elementoPai = elemento.currentTarget.parentNode;

    // Fecha todas as outras respostas primeiro
    fechaTodasRespostas(elementoPai);

    // Alterna a classe que mostra/esconde a resposta
    elementoPai.classList.toggle(classe);
}

function fechaTodasRespostas(elementoAtual) {
    const questionsItems = document.querySelectorAll('.faq__questions__item');

    questionsItems.forEach(item => {
        // Fecha todas as respostas exceto a que está sendo clicada
        if (item !== elementoAtual) {
            item.classList.remove('faq__questions__item--is--open');
        }
    });
}

const heroSection = document.querySelector('.hero');
const alturaHero = heroSection.clientHeight;

window.addEventListener('scroll', () => {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
        ocultaElementosDoHeader();
    } else {
        exibeRemoveElementosDoHeader();
    }
});

function ocultaElementosDoHeader () {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeRemoveElementosDoHeader () {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}