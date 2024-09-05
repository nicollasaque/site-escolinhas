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

const escolinhas = [
    {
        nome: "Escolinha 1",
        endereco: "Rua X, Bairro Y, Número Z",
        email: "exemplo@escolinha1.com",
        telefone: "+55 11 99999-9999",
        whatsapp: "5511999999999",
        mapaSrc: "https://www.google.com/maps/embed?pb=..."
    },
    {
        nome: "Escolinha 2",
        endereco: "Rua A, Bairro B, Número C",
        email: "exemplo@escolinha2.com",
        telefone: "+55 11 88888-8888",
        whatsapp: "5511888888888",
        mapaSrc: "https://www.google.com/maps/embed?pb=..."
    },
    {
        nome: "Escolinha 3",
        endereco: "Rua A, Bairro B, Número C",
        email: "exemplo@escolinha3.com",
        telefone: "+55 11 88888-8888",
        whatsapp: "5511888888888",
        mapaSrc: "https://www.google.com/maps/embed?pb=..."
    },
];

const container = document.getElementById('schools-container');

// Função para gerar o conteúdo dinamicamente
escolinhas.forEach(escolinha => {
    const schoolDiv = document.createElement('div');
    schoolDiv.classList.add('contato-escolinha');
    schoolDiv.innerHTML = `
        <div class="map-container">
            <iframe src="${escolinha.mapaSrc}" width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="info-container">
            <div class="school-info">
                <h3>${escolinha.nome}</h3>
                <p><strong>Endereço:</strong> ${escolinha.endereco}</p>
                <p><strong>Email:</strong> <a href="mailto:${escolinha.email}">${escolinha.email}</a></p>
                <p><strong>Telefone:</strong> <a href="tel:${escolinha.telefone}">${escolinha.telefone}</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/${escolinha.whatsapp}" target="_blank">Conversar no WhatsApp</a></p>
            </div>
        </div>
    `;
    container.appendChild(schoolDiv);
});

const patrocinadores = [
    { imgSrc: 'patrocinador1.png', altText: 'Patrocinador 1' },
    { imgSrc: 'patrocinador2.png', altText: 'Patrocinador 2' },
    { imgSrc: 'patrocinador3.png', altText: 'Patrocinador 3' }
];

// Função para criar e adicionar os elementos dos patrocinadores ao DOM
function carregarPatrocinadores() {
    const container = document.getElementById('patrocinadores-grid');

    patrocinadores.forEach(patrocinador => {
        // Cria o elemento do patrocinador
        const item = document.createElement('div');
        item.className = 'patrocinador-item';

        // Cria a imagem
        const img = document.createElement('img');
        img.src = patrocinador.imgSrc;
        img.alt = patrocinador.altText;

        // Adiciona a imagem ao item
        item.appendChild(img);

        // Adiciona o item ao contêiner
        container.appendChild(item);
    });
}

// Chama a função para carregar os patrocinadores ao carregar a página
window.onload = carregarPatrocinadores;