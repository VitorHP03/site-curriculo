let num1 = 1;

function rolarDireita() {
  let video = document.getElementById("midia");
  let setaDireita = document.getElementById("seta-direita");
  let setaEsquerda = document.getElementById("seta-esquerda");
  let titulo = document.getElementById("tituloVideo");

  if (num1 < 3) {
    num1++;
  }
  if (num1 === 2) {
    video.src = "https://www.youtube.com/embed/zkf3Az5TymQ?si=ga9wuAMfuYVelz06";
    titulo.innerHTML = "Parte 2";
    setaEsquerda.style.display = "inline-block";
    setaDireita.style.display = "inline-block";
  } else if (num1 === 3) {
    video.src = "https://www.youtube.com/embed/aZeIgqq6Scw?si=_RzV4-JufGWyZsSW";
    titulo.innerHTML = "Parte 3";
    setaEsquerda.style.display = "inline-block";
    setaDireita.style.display = "none";
  }
}

function rolarEsquerda() {
  let video = document.getElementById("midia");
  let setaDireita = document.getElementById("seta-direita");
  let setaEsquerda = document.getElementById("seta-esquerda");
  let titulo = document.getElementById("tituloVideo");

  if (num1 > 1) {
    num1--;
  }

  if (num1 === 1) {
    video.src = "https://www.youtube.com/embed/abNwLjKFXDQ?si=b7-IQbqonCVtcmc5";
    titulo.innerHTML = "Parte 1";
    setaEsquerda.style.display = "none";
    setaDireita.style.display = "inline-block";
  } else if (num1 === 2) {
    video.src = "https://www.youtube.com/embed/zkf3Az5TymQ?si=ga9wuAMfuYVelz06";
    titulo.innerHTML = "Parte 2";
    setaEsquerda.style.display = "inline-block";
    setaDireita.style.display = "inline-block";
  }
}
