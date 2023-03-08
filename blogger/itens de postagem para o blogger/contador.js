const output = document.querySelector("h1");

const countDown = (endDate, finalDate) => {
  const countDownDate = new Date(endDate).getTime();
  const now = new Date().getTime();
  let distance = countDownDate - now;

  if (distance < 0) {
    distance = new Date(finalDate).getTime() - now;

    if (distance < 0) {
      output.innerText = "Evento finalizado";
      return;
    }
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  output.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// Define as datas finais das contagens regressivas
const firstEndDate = "2023-03-07T16:51:38"
const secondEndDate = "2023-03-07T16:51:50";

// Chama a função countDown a cada segundo
setInterval(() => {
  countDown(firstEndDate, secondEndDate);
}, 1000);
