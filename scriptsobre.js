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
const tecnologiasSection = document.getElementById('tecnologias');
const outraSecao = document.getElementById('sobre');
const defaultColor = '#f5efeb';
const buffer = 65; // Distância em pixels antes do fim da seção

window.addEventListener('scroll', () => {
  const tecnologiasSectionTop = tecnologiasSection.offsetTop;
  const tecnologiasSectionBottom = tecnologiasSectionTop + tecnologiasSection.offsetHeight - buffer;
  const outraSecaoTop = outraSecao.offsetTop;
  const headerHeight = header.offsetHeight;

  if (window.scrollY >= tecnologiasSectionTop - headerHeight && window.scrollY < tecnologiasSectionBottom) {
    header.style.backgroundColor = getComputedStyle(tecnologiasSection).backgroundColor;
  } else {
    header.style.backgroundColor = defaultColor;
  }
});