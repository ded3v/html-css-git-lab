const botao = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
  mensagem.textContent = "Primeira interação com JavaScript funcionando!";
});