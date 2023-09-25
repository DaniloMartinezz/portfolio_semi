feather.replace();


const textoAdicional = "Misturando Desenvolvimento Frontend, Ambiente Digital e Design trago soluções para seu produto no mercado";
let indice = 0;
const elementoTexto = document.getElementById("textos");

function digitarTexto() {
    if (indice < textoAdicional.length) {
        elementoTexto.innerHTML += textoAdicional.charAt(indice);
        indice++;
        setTimeout(digitarTexto, 70);  // Ajuste o tempo para acelerar ou desacelerar a digitação
    } else {
        // Você pode adicionar alguma ação ao final, se necessário
    }
}

// Iniciar a digitação após um pequeno atraso
setTimeout(digitarTexto, 2000);





document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Evita que o evento se propague ao body quando clicar no card
            event.stopPropagation();

            if (!card.classList.contains('expandido')) {
                card.classList.add('expandido');
            } else {
                card.classList.remove('expandido');
            }
        });
    });

    // Adiciona um evento de clique no body para fechar o projeto expandido
    document.body.addEventListener('click', function() {
        const cardExpandido = document.querySelector('.card.expandido');
        if (cardExpandido) {
            cardExpandido.classList.remove('expandido');
        }
    });
});




function displayDetails(evt, chosenCategory) {
    evt.preventDefault();  // Isso evita o comportamento padrão da âncora.

    let mainTitle, secondaryTitle, description, eventDate;

    switch (chosenCategory) {
        case 'Tecnet.IT':
            mainTitle = "Analista de Sistemas ";
            secondaryTitle = "Tecnet.IT - São Paulo";
            description = "Como Analista de sistemas front-end, tive a oportunidade de trabalhar em um projeto de e-commerce e adquirir experiência com as principais plataformas do mercado, incluindo Shopify. Além disso, pude desenvolver habilidades em vendas e social media, fortalecendo meu conhecimento em diversas áreas.  ";
            break;
        case 'FIESP':
            mainTitle = "Developer Front-End";
            secondaryTitle = "FIESP - Federação das Indústrias do Estado de São Paulo";
            description = "Atualmente trabalho como estagiário na FIESP, onde tenho contato direto com linguagens front-end, desenvolvendo soluções web, adquirindo experiências práticas e aprimorando minhas habilidades em front-end e banco de dados.";
            break;
        case 'FIAP':
            mainTitle = "Análise e Desenvolvimento de Sistemas";
            secondaryTitle = "FIAP - São Paulo";
            description = "Graduando em Análise e Desenvolvimento de Sistemas pela FIAP, onde mergulho nas tecnologias mais relevantes do mercado atual. Cada módulo me desafiou a aplicar minha aprendizagem em projetos práticos, transformando teoria em soluções inovadoras. Atualmente estou criando minha própria Fintech cuidando do Frontend, Beckend, UI/UX e Banco de dados, além de diversos casos de uso.";
            break;
        case 'CEMEP':
            mainTitle = "Técnico em Informática";
            secondaryTitle = "CEMEP - Paulínia";
            description = "Formado como Técnico em Informática, possuo um sólido entendimento dos fundamentos de programação, o técnico foi focado em Lógica de Programação, Front e Beckend onde tive contato com técnologias e pude aprimorar meus conhecimentos na área.";
            break;
    }

    document.getElementById('titulo').innerText = mainTitle; 
    document.getElementById('subtitulo').innerText = secondaryTitle;
    document.getElementById('texto').innerText = description;
}
function updateContent(event, categoria) {
    event.preventDefault();  // Isso evita o comportamento padrão da âncora.

    let titulo, subtitulo, texto, data;

    // ... (resto do código)
}