    // Change nav style on scroll
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

// Handling the get started button
function handleGetStarted() {
  alert("Welcome to Jay's official web Company, We will be in touch soon");
}

// Handling the form section
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (me) {
  me.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Please all fields needs to be filled");
  } else {
    alert(
      `Hello ${name} you're welcome to Jay's Official Webpage and will attend to your message: "${message}" soon`
    );
  }
});
