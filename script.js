let num1 = 1;

function rolarDireita() {
  let video = document.getElementById("midia");
  let setaDireita = document.getElementById("seta-direita");
  let setaEsquerda = document.getElementById("seta-esquerda");
  let titulo = document.getElementById("tituloVideo");
  num1++;

  if (num1 === 1) {
    video.src = "https://youtu.be/abNwLjKFXDQ?si=yHMp5KOyffGYwgRC";
    titulo.innerHTML = "Parte 1";
  }
  if (num1 === 2) {
    video.src = "https://youtu.be/zkf3Az5TymQ?si=zDl-f39Qhajj7YlV";
    titulo.innerHTML = "Parte 2";
    setaEsquerda.src = "setas/esquerda.svg";
    setaDireita.style.display = "inline-block";
  }
  if (num1 === 3) {
    video.src = "https://youtu.be/aZeIgqq6Scw?si=yanZ7ayh_B4MZBk9";
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
    video.src = "https://youtu.be/abNwLjKFXDQ?si=yHMp5KOyffGYwgRC";
    titulo.innerHTML = "Parte 1";
    setaEsquerda.src = "";
  }
  if (num1 === 2) {
    video.src = "https://youtu.be/zkf3Az5TymQ?si=zDl-f39Qhajj7YlV";
    titulo.innerHTML = "Parte 2";
    setaEsquerda.src = "setas/esquerda.svg";
    setaDireita.style.display = "inline-block";
  }
  if (num1 === 3) {
    video.src = "https://youtu.be/aZeIgqq6Scw?si=yanZ7ayh_B4MZBk9";
    titulo.innerHTML = "Parte 3";
    setaEsquerda.src = "setas/esquerda.svg";
    setaDireita.style.display = "none";
  }
}
