// Mark JS availability — reveal styles only apply when JS can un-hide them
document.documentElement.classList.add('js');

// Reveal sections on scroll
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
