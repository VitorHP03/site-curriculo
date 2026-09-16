let num1 = 1;

function rolarDireita() {
  let video = document.getElementById("midia");
  let setaDireita = document.getElementById("seta-direita");
  let setaEsquerda = document.getElementById("seta-esquerda");
  let titulo = document.getElementById("tituloVideo");
  num1++;

  if (num1 === 1) {
    video.src = "https://www.youtube.com/watch?v=abNwLjKFXDQ";
    titulo.innerHTML = "Parte 1";
  }
  if (num1 === 2) {
    video.src = "https://www.youtube.com/watch?v=zkf3Az5TymQ";
    titulo.innerHTML = "Parte 2";
    setaEsquerda.src = "setas/esquerda.svg";
    setaDireita.style.display = "inline-block";
  }
  if (num1 === 3) {
    video.src = "https://www.youtube.com/watch?v=aZeIgqq6Scw";
    titulo.innerHTML = "Parte 3";
    setaEsquerda.src = "setas/esquerda.svg";
    setaDireita.style.display = "none";
  }
}

function rolarEsquerda() {
  let video = document.getElementById("midia");
  let setaDireita = document.getElementById("seta-direita");
  let setaEsquerda = document.getElementById("seta-esquerda");
  let titulo = document.getElementById("tituloVideo");

  num1--;

  if (num1 === 1) {
    video.src = "https://www.youtube.com/watch?v=abNwLjKFXDQ";
    titulo.innerHTML = "Parte 1";
    setaEsquerda.src = "";
  }
  if (num1 === 2) {
    video.src = "https://www.youtube.com/watch?v=zkf3Az5TymQ";
    titulo.innerHTML = "Parte 2";
    setaEsquerda.src = "setas/esquerda.svg";
    setaDireita.style.display = "inline-block";
  }
  if (num1 === 3) {
    video.src = "https://www.youtube.com/watch?v=aZeIgqq6Scw";
    titulo.innerHTML = "Parte 3";
    setaEsquerda.src = "setas/esquerda.svg";
    setaDireita.style.display = "none";
  }
}
