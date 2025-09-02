// particles.js setup
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: "#523D35" },
    line_linked: { enable: true, color: "#959D90" },
    move: { enable: true }
  }
});

// Scroll progress
window.addEventListener('scroll', () => {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("progressBar").style.width = (winScroll / height) * 100 + "%";
});

// Back to top
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) backToTop.classList.add('active');
  else backToTop.classList.remove('active');
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
