// Script para habilitar el desplegado de las descripciones de las tarjetas
const cardTitles = document.querySelectorAll('.card-title');
const showCodeButtons = document.querySelectorAll('.show-code');
const showGameButtons = document.querySelectorAll('.show-game');

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

showGameButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const cardCode = button.previousElementSibling;
    const buttonText = button.textContent;

    if (cardCode.style.display === 'none') {
      cardCode.style.display = 'block';
      button.textContent = 'Ocultar código del juego';
    } else {
      cardCode.style.display = 'none';
      button.textContent = 'Ver código del juego';
    }
  });
});

const playButton = document.querySelector('#first-game');

playButton.addEventListener('click', () => {
  alert("¡Bienvenido a 'Conteo Ascendente de 2 en 2'!");
  alert("El juego consiste en adivinar los números en el conteo ascendente.");

  let puntuacion = 0;

  for (let i = 0; i <= 10; i += 2) {
    const respuesta = parseInt(prompt("Siguiente número: " + i + ". Adivina el número siguiente:"));

    if (respuesta === i + 2) {
      alert("¡Correcto! Ganaste 1 punto.");
      puntuacion++;
    } else {
      alert("Incorrecto. El número siguiente era: " + (i + 2));
      puntuacion--;
    }
  }

  alert("Fin del juego. Tu puntuación final es: " + puntuacion);
})

// const showComments = document.querySelector('.show-comments');

// showComments.addEventListener('click', () => {
//   const comentarios = document.querySelectorAll('.card-code code.language-javascript .comment');
//   const boton = document.querySelectorAll('.card-code .show-comments');

//   for (let i = 0; i < comentarios.length; i++) {
//       if (comentarios[i].style.display === 'none') {
//           comentarios[i].style.display = 'block';
//           boton.textContent = 'Ocultar comentarios';
//       } else {
//           comentarios[i].style.display = 'none';
//           boton.textContent = 'Ver comentarios';
//       }
//   }
// })

// Inicializar Prism.js para resaltar la sintaxis del código
Prism.highlightAll();