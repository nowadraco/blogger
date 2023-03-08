function countdown(endDate, finalDate) {
    const output = document.querySelector("h1");
  
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
  