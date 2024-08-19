document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Adiciona o evento de clique para mostrar ou ocultar o menu
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});
