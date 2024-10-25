// Seleciona todos os links do menu
/*const links = document.querySelectorAll('nav a');

// Adiciona um evento de clique a cada link
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        /* Obtém   
 o ID da seção a partir do atributo href */
        /*const targetId = link.getAttribute('href');

        // Obtém a seção correspondente
        const targetElement = document.querySelector(targetId);

        // Rolar suavemente até a seção
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
})*/

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = link.getAttribute('href');   


        // Verifica se o link é interno (inicia com #)
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Link externo: Adiciona um pequeno delay antes de redirecionar
            setTimeout(() => {
                window.location.href = targetId;
            }, 500); // Ajuste o delay conforme necessário
        }
    });
});

const header = document.getElementById('header');
const projetosSection = document.getElementById('projetos');
const outraSecao = document.getElementById('inicio');
const defaultColor = '#f5efeb';
const buffer = 65; // Distância em pixels antes do fim da seção

window.addEventListener('scroll', () => {
  const projetosSectionTop = projetosSection.offsetTop;
  const projetosSectionBottom = projetosSectionTop + projetosSection.offsetHeight - buffer;
  const outraSecaoTop = outraSecao.offsetTop;
  const headerHeight = header.offsetHeight;

  if (window.scrollY >= projetosSectionTop - headerHeight && window.scrollY < projetosSectionBottom) {
    header.style.backgroundColor = getComputedStyle(projetosSection).backgroundColor;
  } else {
    header.style.backgroundColor = defaultColor;
  }
});