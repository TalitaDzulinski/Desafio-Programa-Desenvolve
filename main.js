function validaFormulario() {
  var email = document.getElementById("email");
  var mensagem = document.getElementById("mensagem");

  if (
    document.getElementById("email").value != "" &&
    document.getElementById("mensagem").value != ""
  ) {
    alert("Obrigado pelo contato!");
  } else {
    alert(
      "Erro no envio: Insira uma mensagem e/ou Endereço de e-mail envalido"
    );
  }
}
