const audio = document.getElementById('bg-music');
const toggleBtn = document.getElementById('audio-toggle');

toggleBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Optional: Scroll animation using IntersectionObserver
const cards = document.querySelectorAll('.month-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  observer.observe(card);
});