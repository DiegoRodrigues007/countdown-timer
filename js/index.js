let diael = document.getElementById("dia");
let horasel = document.getElementById("horas");
let minutosel = document.getElementById("minutos");
let segundosel = document.getElementById("segundos");

const anoNovo = "5 jun 2023";

const atualizarContagem = () => {
  const anoNovoData = new Date(anoNovo);
  const dataAtual = new Date();

  const totalSegundos = (anoNovoData - dataAtual) / 1000;

  const dias = Math.floor(totalSegundos / 3600 / 24);
  const horas = Math.floor(totalSegundos / 3600) % 24;
  const minutos = Math.floor(totalSegundos / 60) % 60;
  const segundos = Math.floor(totalSegundos) % 60;

  diael.innerHTML = dias;
  horasel.innerHTML = formatTime(horas);
  minutosel.innerHTML = formatTime(minutos);
  segundosel.innerHTML = formatTime(segundos);
};

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

atualizarContagem();

setInterval(atualizarContagem, 1000);
