// Script para habilitar el desplegado de las descripciones de las tarjetas
const cardTitles = document.querySelectorAll('.card-title');
const showCodeButtons = document.querySelectorAll('.show-code');

cardTitles.forEach((title) => {
  title.addEventListener('click', () => {
    const cardDescription = title.nextElementSibling;
    cardDescription.style.display = (cardDescription.style.display === 'none') ? 'block' : 'none';
  });
});

showCodeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const cardCode = button.previousElementSibling;
    const buttonText = button.textContent;

    if (cardCode.style.display === 'none') {
      cardCode.style.display = 'block';
      button.textContent = 'Ocultar solución';
    } else {
      cardCode.style.display = 'none';
      button.textContent = 'Ver solución';
    }
  });
});

// Inicializar Prism.js para resaltar la sintaxis del código
Prism.highlightAll();