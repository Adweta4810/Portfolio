// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Active link on click (and close menu on mobile)
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.querySelectorAll('.nav-links a').forEach(x => x.classList.remove('active'));
    a.classList.add('active');
    navLinks.classList.remove('show');
  });
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Typewriter
const roles = ["a Student", "Intrested in Data Analysist", "Intrested in Designing", "Intrested in ML and AI"];
const tw = document.getElementById('typewriter');
let rIndex = 0, cIndex = 0, deleting = false;

function type() {
  const current = roles[rIndex];
  if (!deleting) {
    cIndex++;
    tw.textContent = current.slice(0, cIndex);
    if (cIndex === current.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    cIndex--;
    tw.textContent = current.slice(0, cIndex);
    if (cIndex === 0) {
      deleting = false;
      rIndex = (rIndex + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 60 : 100);
}
type();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
},{ threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Resume download visual feedback
const resumeBtn = document.getElementById('resumeBtn');
resumeBtn.addEventListener('click', () => {
  // slight feedback for click; does not block the download
  resumeBtn.classList.add('downloading');
  resumeBtn.innerHTML = '<i class="ri-check-line"></i> Downloading…';
  setTimeout(() => {
    resumeBtn.innerHTML = '<i class="ri-check-line"></i> Saved!';
    setTimeout(() => resumeBtn.innerHTML = '<i class="ri-download-2-line"></i> Download Resume', 1500);
  }, 900);
});
