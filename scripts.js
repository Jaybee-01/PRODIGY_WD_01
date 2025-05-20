// Adding hover effects to the navigation links
const navLinks = document.querySelectorAll("nav a");

// Loop through each link and add event listeners for hover effects
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.backgroundColor = "#555";
    link.style.padding = "10px 15px";
    link.style.borderRadius = "5px";
  });

  link.addEventListener("mouseout", () => {
    link.style.backgroundColor = "transparent";
    link.style.padding = "0";
  });
});

// Handling the get started button
function handleGetStarted() {
  alert("Welcome to Tech savy official webpage, We will be in touch soon");
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
      `Hello ${name} you're welcome to Tech savy Official Webpage and will attend to your message: "${message}" soon`
    );
  }
});

const handlebtn = document.getElementById("handlebtn");

handlebtn.addEventListener("mouseover", () => {
  handlebtn.style.background = "#555";
  handlebtn.style.color = "#fff";
});
handlebtn.addEventListener("mouseout", () => {
  handlebtn.style.background = "";
  handlebtn.style.padding = "";
  handlebtn.style.color = "#000";
});

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("mouseover", () => {
  sendBtn.style.background = "#555";
  sendBtn.style.color = "#fff";
});

sendBtn.addEventListener("mouseout", () => {
  sendBtn.style.background = "";
  sendBtn.style.color = "#000";
});

// for the hamburger menu
const hamburger = document.getElementById("hamburger");
const mobile = document.getElementById("mobile-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobile.classList.toggle("show");
});
