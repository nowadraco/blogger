function countdown(endDate, finalDate, outputElement) {
  const output = document.querySelector(outputElement);
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
}

const firstEndDate = "2023-03-11T10:59:59";
const secondEndDate = "2023-03-11T13:59:59";
const thirdEndDate = "2023-03-11T16:59:59";
const fourEndDate = "2023-03-11T11:30:00";
const fiveEndDate = "2023-03-11T14:30:00";
const sixEndDate = "2023-03-11T15:30:00";

setInterval(() => {
  countdown(firstEndDate, fourEndDate, "#contador1");
  countdown(secondEndDate, fiveEndDate, "#contador2");
  countdown(thirdEndDate, sixEndDate, "#contador3");
}, 1000);
