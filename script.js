document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Adiciona o evento de clique para mostrar ou ocultar o menu
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
    });
});

// const track = document.querySelector('.carousel-track');
// const slides = Array.from(track.children);
// const leftButton = document.querySelector('.carousel-button-left');
// const rightButton = document.querySelector('.carousel-button-right');
// const slideWidth = slides[0].getBoundingClientRect().width;

// slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// });

// let currentSlideIndex = 0;

// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
// };

// leftButton.addEventListener('click', () => {
//     const currentSlide = slides[currentSlideIndex];
//     currentSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1;
//     const targetSlide = slides[currentSlideIndex];
//     moveToSlide(track, currentSlide, targetSlide);
// });

// rightButton.addEventListener('click', () => {
//     const currentSlide = slides[currentSlideIndex];
//     currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1;
//     const targetSlide = slides[currentSlideIndex];
//     moveToSlide(track, currentSlide, targetSlide);
// });

// Exemplo de vetor com os nomes das imagens
const campeonatosFotos = [
    'campeonato1.jpg',
    'campeonato2.jpg',
    'campeonato3.jpg',
    'campeonato4.jpg',
    'campeonato5.jpg',
    'campeonato1.jpg',
    'campeonato2.jpg',
    'campeonato3.jpg',
    'campeonato4.jpg',
    'campeonato5.jpg',
    'campeonato2.jpg',
    'campeonato3.jpg',
    'campeonato4.jpg',
    'campeonato5.jpg',
    // Adicione mais fotos conforme necessário
];

const treinamentosFotos = [
    'treinamento1.jpg',
    'treinamento2.jpg',
    'treinamento3.jpg',
    'treinamento4.jpg',
    'treinamento1.jpg',
    'treinamento2.jpg',
    'treinamento3.jpg',
    'treinamento4.jpg',
    'treinamento1.jpg',
    'treinamento2.jpg',
    'treinamento3.jpg',
    'treinamento4.jpg',
    // Adicione mais fotos conforme necessário
];

// Função para criar os itens do carrossel
function criarCarrossel(fotos, id) {
    const carousel = document.querySelector(`#${id} .carousel`);

    fotos.forEach(foto => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        
        const img = document.createElement('img');
        img.src = foto;
        img.alt = foto.split('.')[0];
        
        item.appendChild(img);
        carousel.appendChild(item);
    });
}

// Chamada da função para criar os carrosséis
criarCarrossel(campeonatosFotos, 'campeonatos');
criarCarrossel(treinamentosFotos, 'treinamentos');