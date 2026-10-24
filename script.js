const button = document.getElementById("menuButton");
const menu = document.getElementById("menu");
button.addEventListener("click", function () {
  menu.classList.toggle("open");
  button.setAttribute("aria-expanded", String(menu.classList.contains("open")));
});
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");
    if (!name || !email || !message || !form.checkValidity()) {
      status.textContent = "Please complete all fields with a valid email.";
    } else {
      status.textContent = "Form validated. Connect a backend to deliver messages.";
      form.reset();
    }
  });
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && menu.classList.contains("open")) {
    menu.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.focus();
  }
});

for (const link of menu.querySelectorAll("a")) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  });
}
