import Countdown from "./countdown.js";

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>carregando...</p>`

  let pronto = `<p>Cadastrado com sucesso</p>`

  content.innerHTML = carregando

  
  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})

const tempoParaBF = new Countdown("26 November 2021 00:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
  tempos.forEach((tempo, index) => {
    tempo.innerHTML = tempoParaBF.total[index]
  });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);


