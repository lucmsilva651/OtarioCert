export function informarErro(erro) {
  let statusErro = "";

  if (erro) {
    statusErro = `\n\n${erro}`;
  }

  window.alert(`Houve um erro ao gerar o certificado. Tente novamente. ${statusErro}`);
};

export function gerarStringNInformado(tipo) {
  let primeiraParte = "";
  let segundaParte = "";
  
  if (tipo) {
    primeiraParte = `O ${tipo}`;
  } else {
    primeiraParte = "Algo";
    segundaParte = "Você provavelmente se esqueceu de colocar seu nome ou gênero.";
  };

  informarErro(`${primeiraParte} não foi informado. ${segundaParte}`);
}