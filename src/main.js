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