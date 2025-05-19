// Recuperando os elementos

const body = document.querySelector("body");

// Botão de tema claro
// Botão de tema escuro

const buttonTheme = document.querySelector("#button-theme");

window.onload = () => {
  const temaSalvo = localStorage.getItem("Tema");
  if (temaSalvo === "Escuro") {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
  } else if (temaSalvo === "Claro") {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  }
  // Define um tema como padrão

  localStorage.setItem("Tema", "Claro");
};

// Função para alterar o tema e salvar a informação
const alterTheme = () => {
  const temaAtual = localStorage.getItem("Tema");
  if (temaAtual === "Escuro") {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
    localStorage.setItem("Tema", "Claro");
  } else if (temaAtual === "Claro") {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
    localStorage.setItem("Tema", "Escuro");
  }
};

// Adicionar o evento

buttonTheme.addEventListener("click", alterTheme);
