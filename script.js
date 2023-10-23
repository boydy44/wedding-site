//Handle login
let passwordText = document.querySelector("#password");
let loginButton = document.querySelector("#login");
let data;

loginButton.addEventListener("click", login);

function login() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => (data = json));

  if (passwordText.value == data.pass) {
    passwordText.classList.remove("incorrect-password");
    window.location.href = data.redirect;
  } else {
    passwordText.classList.add("incorrect-password");
  }
}

// Pop up menu
let openMenuButton = document.querySelector("#openMenuButton");
let closeMenuButton = document.querySelector("#closeMenuButton");
let popUpMenu = document.querySelector("#popUpMenu");

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu);

function openMenu() {
  popUpMenu.classList.add("pop-up-menu-container-open");
}

function closeMenu() {
  popUpMenu.classList.remove("pop-up-menu-container-open");
}

// Calculate number of days until wedding
let weddingDate = new Date("04/10/2025");
let todayDate = new Date();

let dateDiffTime = weddingDate.getTime() - todayDate.getTime();

let dateDiffDays = Math.ceil(dateDiffTime / (1000 * 3600 * 24));

document.querySelector("#daysCounter").innerHTML = dateDiffDays;
