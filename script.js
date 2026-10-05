
const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducir) {
  anime.timeline({ easing: 'easeOutCubic' })
    .add({ targets: '#logo', translateX: [-24, 0], opacity: [0, 1], duration: 700 })
    .add({ targets: '.nav-desktop li', translateY: [-16, 0], opacity: [0, 1],
           delay: anime.stagger(90), duration: 500 }, '-=400')
    .add({ targets: '#cta-nav', scale: [1, 1.08, 1], duration: 600 });
}

const menu = document.getElementById('menu-movil');
if (menu) {
  menu.addEventListener('toggle', () => {
    if (!menu.open || reducir) return;
    anime({ targets: '#menu-movil li', translateX: [20, 0], opacity: [0, 1],
            delay: anime.stagger(60), duration: 400, easing: 'easeOutQuad' });
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.removeAttribute('open')));
}

const tarjetas = document.querySelectorAll('.servicio-card');
if (reducir) {
  tarjetas.forEach(t => (t.style.opacity = 1));
} else {
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    anime({ targets: '.servicio-card', translateY: [40, 0], opacity: [0, 1],
            delay: anime.stagger(150), duration: 700, easing: 'easeOutCubic' });
    obs.disconnect();
  }, { threshold: 0.2 });
  obs.observe(document.getElementById('servicios'));
  tarjetas.forEach(t => {
    t.addEventListener('mouseenter', () => anime({ targets: t, translateY: -8, duration: 250, easing: 'easeOutQuad' }));
    t.addEventListener('mouseleave', () => anime({ targets: t, translateY: 0, duration: 250, easing: 'easeOutQuad' }));
  });
}