import { elementos as elements } from "./elementos.js";
import { gerarStringNInformado } from "./commons.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function dataAtual() {
  const data = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  return data;
};

document.addEventListener("DOMContentLoaded", () => {
  elements.dataAtual.textContent = dataAtual();

  if (urlParams) {
    if (urlParams.get("imprimirAuto") == "sim") {
      elements.imprimirBtn.click();
    }

    switch (urlParams.get("nome")) {
      default:
        elements.nomeUsuario.textContent = urlParams.get("nome");
        break;
      case null || "":
        gerarStringNInformado("nome");
        window.history.back();
        break;
    };

    switch (urlParams.get("pronome")) {
      case "masc":
        elements.pronomeUsuario.textContent = "";
        elements.pronomeUsuario2.textContent = "o";
        break;
      case "fem":
        elements.pronomeUsuario.textContent = "a";
        elements.pronomeUsuario2.textContent = "a";
        break;
      case "neu":
        elements.pronomeUsuario.textContent = "e";
        elements.pronomeUsuario2.textContent = "e";
        break;
      default:
        gerarStringNInformado("gênero");
        window.history.back();
        break;
    };
  };
});

elements.imprimirBtn.addEventListener("click", () => {
  window.print();
  window.onafterprint = function () {
    window.history.back();
  };
});