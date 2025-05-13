// Devo criar um evento
// Ele deve salvar a preferência de tema do usuário

// Recuperar os elementos

const body = document.querySelector("body");
const buttonLight = document.querySelector("#button-light");
const buttonDark = document.querySelector("#button-dark");

const storage = localStorage;

function lightTheme() {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  localStorage.setItem("Theme", "White");
}

function darkTheme() {
  body.style.backgroundColor = "black";
  body.style.color = "white";
}

storage.setItem("Theme", "White");

window.onload = () => {
  if (localStorage.getItem("Theme") === "White") {
    buttonLight.addEventListener("click", darkTheme);
    storage.setItem("Theme", "Dark");
  } else if (localStorage.getItem("Theme" === "Dak")) {
    buttonLight.addEventListener("click", lightTheme);
    storage.setItem("Theme", "White");
  }
};
