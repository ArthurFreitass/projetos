const storage = localStorage;

// Recupere os elementos

const body = document.querySelector("body");
const button = document.getElementById("change-theme");

// Carregar os elementos

window.onload = () => {
  const themeSaved = storage.getItem("theme");
  // Recupera o valor salvo

  if (themeSaved === "light") {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  } else if (themeSaved === "dark") {
    body.style.backgroundColor = "#222831";
    body.style.color = "#fff";

    // Se nenhum dos valores existir cria um padrão
  } else {
    storage.setItem("theme", "light");
  }
};

// Adiciona o evento e a Função

const alterTheme = () => {
  // Recuperar o valor atual
  const themeSaved = storage.getItem("theme");
  // Alterar os temas
  if (themeSaved === "light") {
    body.style.backgroundColor = "#222831";
    body.style.color = "#fff";
    // Alterar o valor da chave
    storage.setItem("theme", "dark");
  } else {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    storage.setItem("theme", "light");
  }
};

button.addEventListener("click", alterTheme);
