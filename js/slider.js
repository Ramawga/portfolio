const sliderTrack = document.getElementById('slider-track');
const sliderItems = document.querySelectorAll('.slider-item');

// Clonar os ícones para dar a ilusão de continuidade
sliderItems.forEach(item => {
  const clone = item.cloneNode(true);
  sliderTrack.appendChild(clone);
});

// Define a largura total do track
const trackWidth = sliderTrack.scrollWidth;
const containerWidth = sliderTrack.parentElement.clientWidth;

let position = 0;
let speed = 1; // Velocidade do slide

function slide() {
  position -= speed;

  // Se a posição for menor que -trackWidth / 2, reposicionar ao início
  if (position <= -trackWidth / 2) {
    position = 0; // Reseta a posição para o início, mas sem pulo visual
  }

  // Atualiza a posição do slider
  sliderTrack.style.transform = `translateX(${position}px)`;

  // Continuar a animação
  requestAnimationFrame(slide);
}

// Iniciar o slide
slide();