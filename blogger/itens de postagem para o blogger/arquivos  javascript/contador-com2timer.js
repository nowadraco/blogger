  function contagemRegressiva(dataFinal, dataFinalFinalizada, elementoSaida) {
  const saida = document.querySelector(elementoSaida);
  const dataContagemRegressiva = new Date(dataFinal).getTime();
  const agora = new Date().getTime();
  let distancia = dataContagemRegressiva - agora;

  if (distancia < 0) {
    distancia = new Date(dataFinalFinalizada).getTime() - agora;

    if (distancia < 0) {
      saida.innerText = "Evento finalizado";
      return;
    }
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  saida.innerText = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

const primeiraDataFinal = "2023-03-11T10:59:59";
const segundaDataFinal = "2023-03-11T13:59:59";
const quartaDataFinal = "2023-03-11T11:30:00";
const quintaDataFinal = "2023-03-11T14:30:00";

setInterval(() => {
  contagemRegressiva(primeiraDataFinal, quartaDataFinal, "#contador1");
  contagemRegressiva(segundaDataFinal, quintaDataFinal, "#contador2");
}, 1000);

