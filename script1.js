// === Animaciones ===
const sections = document.querySelectorAll(
  'section, .aparecer, .custom-card, .leccion, .objective-container, .classname, .bienvenida, header, .btncontainer'
);

const scrollEffect = () => {
  let scrollTop = document.documentElement.scrollTop;

  sections.forEach(section => {
    let sectionOffset = section.offsetTop;

    if (scrollTop + window.innerHeight > sectionOffset + 100) {
      section.classList.add('activo');
    } else {
      section.classList.remove('activo');
    }
  });
};

window.addEventListener('scroll', scrollEffect);
window.addEventListener('load', () => {
  const bienvenida = document.querySelector('.bienvenida');
  if (bienvenida) bienvenida.classList.add('activo');

  scrollEffect();
});

// === Progreso de lecciones ===

// Marcar clase como completada (se guarda en sessionStorage)
function terminarClase(id) {
  sessionStorage.setItem('leccion-' + id, 'completada');
}

// Pintar cards completadas en lecciones.html
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.leccion');
  cards.forEach(card => {
    const id = card.dataset.id;
    if (sessionStorage.getItem('leccion-' + id) === 'completada') {
      card.classList.add('completada');
    }
  });
});
