//Handle login
window.addEventListener("unhandledrejection", (event) => {
  console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
});
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => (data = json));

let passwordText = document.querySelector("#password");
let loginButton = document.querySelector("#login");
let data;

if (loginButton !== null) {
  loginButton.addEventListener("click", login);
  passwordText.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      loginButton.click();
    }
  });
}

function login() {
  if (passwordText.value == data.pass) {
    window.location.href = data.redirect;
  } else {
    alert("Incorrect password");
  }
}

// Pop up menu
let openMenuButton = document.querySelector("#openMenuButton");
let closeMenuButton = document.querySelector("#closeMenuButton");
let popUpMenu = document.querySelector("#popUpMenu");

// If not on login screen
if (openMenuButton !== null && closeMenuButton !== null) {
  openMenuButton.addEventListener("click", openMenu);
  closeMenuButton.addEventListener("click", closeMenu);
}

function openMenu() {
  popUpMenu.classList.add("pop-up-menu-container-open");
}

function closeMenu() {
  popUpMenu.classList.remove("pop-up-menu-container-open");
}

// Calculate number of days until wedding
let daysCounter = document.querySelector("#daysCounter");

if (daysCounter !== null) {
  let weddingDate = new Date("04/10/2025");
  let todayDate = new Date();

  let dateDiffTime = weddingDate.getTime() - todayDate.getTime();
  let dateDiffDays = Math.ceil(dateDiffTime / (1000 * 3600 * 24));

  daysCounter.innerHTML = dateDiffDays;
}
