<script src="script.js"></script>

// ====== TYPING ANIMATION ======
const texts = ["Rohan Kavali", "a Web Developer", "a Designer", "a Coder"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}
function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
}
document.addEventListener("DOMContentLoaded", type);

// ====== DARK MODE TOGGLE ======
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ====== SCROLL TO TOP BUTTON ======
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====== AOS-LIKE SCROLL ANIMATIONS ======
const elements = document.querySelectorAll("[data-aos]");
window.addEventListener("scroll", () => {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("aos-animate");
    }
  });
});
