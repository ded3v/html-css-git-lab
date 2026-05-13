console.log("Mini Projeto 1 - Contador Interativo iniciado");

let contador = 0;
let passo = 1;

const valorContador = document.querySelector("#valor-contador");
const botaoAumentar = document.querySelector("#botao-aumentar");
const botaoDiminuir = document.querySelector("#botao-diminuir");
const botaoZerar = document.querySelector("#botao-zerar");
const botaoDobrar = document.querySelector("#botao-dobrar");
const inputPasso = document.querySelector("#input-passo");
const textoPasso = document.querySelector("#texto-passo");
const statusSinal = document.querySelector("#status-sinal");
const statusParidade = document.querySelector("#status-paridade");
const statusIntensidade = document.querySelector("#status-intensidade");
const mensagemDebug = document.querySelector("#mensagem-debug");

function atualizarValorNaTela() {
  valorContador.textContent = contador;
}

function atualizarPassoNaTela() {
  textoPasso.textContent = passo;
}

function atualizarStatusSinal() {
  if (contador > 0) {
    statusSinal.textContent = "Positivo";
  } else if (contador < 0) {
    statusSinal.textContent = "Negativo";
  } else {
    statusSinal.textContent = "Zero";
  }
}

function atualizarStatusParidade() {
  if (contador % 2 === 0) {
    statusParidade.textContent = "Par";
  } else {
    statusParidade.textContent = "Ímpar";
  }
}

function atualizarStatusIntensidade() {
  if (contador >= 10) {
    statusIntensidade.textContent = "Alto";
  } else if (contador <= -10) {
    statusIntensidade.textContent = "Baixo";
  } else {
    statusIntensidade.textContent = "Neutro";
  }
}

function atualizarClasseVisual() {
  document.body.classList.remove("positivo");
  document.body.classList.remove("negativo");
  document.body.classList.remove("zero");
  document.body.classList.remove("limite-alto");
  document.body.classList.remove("limite-baixo");

  if (contador > 0) {
    document.body.classList.add("positivo");
  } else if (contador < 0) {
    document.body.classList.add("negativo");
  } else {
    document.body.classList.add("zero");
  }

  if (contador >= 10) {
    document.body.classList.add("limite-alto");
  }

  if (contador <= -10) {
    document.body.classList.add("limite-baixo");
  }
}

function atualizarTudo() {
  atualizarValorNaTela();
  atualizarPassoNaTela();
  atualizarStatusSinal();
  atualizarStatusParidade();
  atualizarStatusIntensidade();
  atualizarClasseVisual();
}

botaoAumentar.addEventListener("click", function () {
  contador = contador + passo;
  mensagemDebug.textContent = "Você aumentou o contador em " + passo + ".";
  atualizarTudo();
  console.log("Aumentou:", contador);
});

botaoDiminuir.addEventListener("click", function () {
  contador = contador - passo;
  mensagemDebug.textContent = "Você diminuiu o contador em " + passo + ".";
  atualizarTudo();
  console.log("Diminuiu:", contador);
});

botaoZerar.addEventListener("click", function () {
  contador = 0;
  mensagemDebug.textContent = "Você zerou o contador.";
  atualizarTudo();
  console.log("Zerou:", contador);
});

botaoDobrar.addEventListener("click", function () {
  contador = contador * 2;
  mensagemDebug.textContent = "Você dobrou o contador.";
  atualizarTudo();
  console.log("Dobrou:", contador);
});

inputPasso.addEventListener("input", function () {
  passo = Number(inputPasso.value);

  if (passo === 0) {
    passo = 1;
    inputPasso.value = 1;
  }

  mensagemDebug.textContent = "Você alterou o passo para " + passo + ".";
  atualizarPassoNaTela();
  console.log("Passo alterado:", passo);
});

atualizarTudo();