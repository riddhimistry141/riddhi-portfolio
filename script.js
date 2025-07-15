// Typing Text Animation
const typingElement = document.querySelector(".typing-text");
const roles = ["Web Developer", "Front-End Developer", "Back-End Developer", "Full Stack Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const current = roles[index];
  typingElement.textContent = current.substring(0, charIndex);

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeText, 1000);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
  }

  setTimeout(typeText, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", typeText);

// Scroll-to-Top Button
const scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  scrollTop.style.display = window.scrollY > 100 ? "block" : "none";
});

// Smooth scroll to top
scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll Animation (Fade-in)
const revealElements = document.querySelectorAll(".service-box, .home-content, .home-img");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Navbar active link highlight
const section = document.querySelectorAll(".navbar a");

function highlightNav() {
  let scrollY = window.scrollY;

  (document.querySelectorAll("section")).forEach((sec) => {
    const offsetTop = sec.offsetTop - 100;
    const offsetBottom = offsetTop + sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollY >= offsetTop && scrollY < offsetBottom) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", highlightNav);






