// ====== TYPING ANIMATION ======
const texts = ["Rohan Kavali", "a Web Developer", "a Designer", "a Coder"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (typingElement) {
    if (charIndex < texts[textIndex].length) {
      typingElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 1500);
    }
  }
}

function erase() {
  if (typingElement) {
    if (charIndex > 0) {
      typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, 500);
    }
  }
}

document.addEventListener("DOMContentLoaded", type);

// ====== DARK MODE TOGGLE ======
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

// Toggle theme
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

// ====== SCROLL TO TOP BUTTON ======
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

  // Trigger animations
  animateOnScroll();
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ====== SCROLL ANIMATIONS (AOS-LIKE) ======
const aosElements = document.querySelectorAll("[data-aos]");

function animateOnScroll() {
  aosElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("aos-animate");
    }
  });
}

window.addEventListener("load", animateOnScroll);

// ====== SIMPLE CONTACT FORM VALIDATION ======
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("⚠️ Please fill out all fields before sending.");
      return;
    }

    // Optional: simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert("⚠️ Please enter a valid email address.");
    }
  });
}
