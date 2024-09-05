document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

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
    ];

    const patrocinadores = [
        { imgSrc: 'patrocinador1.png', altText: 'Patrocinador 1' },
        { imgSrc: 'patrocinador2.png', altText: 'Patrocinador 2' },
        { imgSrc: 'patrocinador3.png', altText: 'Patrocinador 3' }
    ];

    const escolinhas = [
        {
            nome: "Escolinha Condor",
            endereco: "Av. Água Verde, 860 - Água Verde, Curitiba - PR, 80620-200",
            email: "liggaarena@escolinha.com",
            telefone: "+55 41 77777-7777",
            whatsapp: "5511999999999",
            mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5748075869587!2d-49.2826991243547!3d-25.4524750337818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfc75952ba25d%3A0xf2d1b1ebb0ba9fe!2sSupermercado%20Condor%20Agua%20Verde!5e0!3m2!1spt-BR!2sbr!4v1725558655271!5m2!1spt-BR!2sbr",
            latitude: -25.45232,
            longitude: -49.28012
        },
        {
            nome: "Escolinha Ligga Arena",
            endereco: "R. Buenos Aires, 1260 - Água Verde, Curitiba - PR, 80250-070",
            email: "liggaarena@escolinha.com",
            telefone: "+55 41 99999-9999",
            whatsapp: "5511999999999",
            mapaSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14410.809552416711!2d-49.2769866!3d-25.4482116!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce476c516477b%3A0x4d03657ac0bc148c!2sLigga%20Arena!5e0!3m2!1spt-BR!2sbr!4v1725558312879!5m2!1spt-BR!2sbr",
            latitude: -25.44803,
            longitude: -49.27697
        },
        {
            nome: "Escolinha CAT",
            endereco: "Estr. do Ganchinho, 1451 - Sítio Cercado, Curitiba - PR, 81930-160",
            email: "cat@escolinha.com",
            telefone: "+55 41 88888-8888",
            whatsapp: "5511888888888",
            mapaSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.6268835821634!2d-49.28134962435131!3d-25.550802637682956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbe014fe729d%3A0x489eba52a833decc!2sCAT%20Caju%20-%20Centro%20Administrativo%20e%20T%C3%A9cnico%20Alfredo%20Gottardi!5e0!3m2!1spt-BR!2sbr!4v1725558447921!5m2!1spt-BR!2sbr",
            latitude: -25.55058,
            longitude: -49.27880
        },
    ];

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

    criarCarrossel(campeonatosFotos, 'campeonatos');
    criarCarrossel(treinamentosFotos, 'treinamentos');

    const scrollContainer = document.getElementById('scroll-container');

    function calcularDistancia(ponto1, ponto2) {
        const rad = (x) => x * Math.PI / 180;
        const dLat = rad(ponto2.latitude - ponto1.latitude);
        const dLong = rad(ponto2.longitude - ponto1.longitude);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(rad(ponto1.latitude)) * Math.cos(rad(ponto2.latitude)) *
            Math.sin(dLong / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return 6371 * c;
    }

    function renderizarEscolinhas(escolinhas) {
        scrollContainer.innerHTML = '';
        escolinhas.forEach(escolinha => {
            const div = document.createElement('div');
            div.className = 'contato-escolinha';
            div.innerHTML = `
                <div class="map-container">
                    <iframe
                        src="${escolinha.mapaSrc}"
                        class="iframe"
                        style="border:0;" allowfullscreen="" loading="lazy">
                    </iframe>
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
            scrollContainer.appendChild(div);
        });
    }

    function ordenarPorProximidade(localizacao) {
        escolinhas.sort((a, b) => {
            const distanciaA = calcularDistancia(localizacao, { latitude: a.latitude, longitude: a.longitude });
            const distanciaB = calcularDistancia(localizacao, { latitude: b.latitude, longitude: b.longitude });
            return distanciaA - distanciaB;
        });
        renderizarEscolinhas(escolinhas);
    }

    function obterLocalizacaoAtual() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const localizacao = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                ordenarPorProximidade(localizacao);
            }, () => {
                renderizarEscolinhas(escolinhas);
            });
        } else {
            renderizarEscolinhas(escolinhas);
        }
    }

    obterLocalizacaoAtual();

    function carregarPatrocinadores() {
        const container = document.getElementById('patrocinadores-grid');

        patrocinadores.forEach(patrocinador => {
            const item = document.createElement('div');
            item.className = 'patrocinador-item';

            const img = document.createElement('img');
            img.src = patrocinador.imgSrc;
            img.alt = patrocinador.altText;

            item.appendChild(img);
            container.appendChild(item);
        });
    }

    window.onload = carregarPatrocinadores;
});