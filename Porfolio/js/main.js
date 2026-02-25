// Active link highlight (based on current page)
(() => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.style.color = "var(--text)";
  });
})();

// Contact form: open mail client (simple + beginner friendly)
function sendMail(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const to = "adwetasigdel2004@gmail.com";
  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;

  window.location.href = mailto;
}