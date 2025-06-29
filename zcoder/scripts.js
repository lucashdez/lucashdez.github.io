// Menú responsive
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

// Scroll: sección activa
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

// Contact form: simple mensaje sin backend
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.textContent = "Mensaje enviado. ¡Gracias por contactarnos!";
    form.reset();
});
