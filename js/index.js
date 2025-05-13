import { elementos as elements } from "./elementos.js";
import { gerarStringNInformado } from "./commons.js";

elements.enviarInformacoes.addEventListener("click", () => {
  if (!(elements.nomeInput.value === "") || !(elements.generoInput.value === "")) {
    window.location.href = `/certificado/?nome=${elements.nomeInput.value}&pronome=${elements.generoInput.value}`
  } else {
    gerarStringNInformado();
  };
});