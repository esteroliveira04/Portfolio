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