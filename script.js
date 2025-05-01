function startCelebration() {
  // INICIA O TIMER DE KM
  let km = 0;
  const kmTarget = 26;
  const kmSpan = document.getElementById("km");
  
  // Este intervalo vai atualizar o contador de km
  const kmInterval = setInterval(() => {
    if (km < kmTarget) {
      km++;
      kmSpan.textContent = km;
    } else {
      clearInterval(kmInterval);
      // Inicia o confete após completar 26km
      startConfetti();
    }
  }, 350); // 300ms para uma contagem mais lenta
  
}

function startConfetti() {
  // INICIA O CONFETE
  const duration = 40 * 1000; // 40 segundos de confete
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 200 * (timeLeft / duration);  // Aumente o número de partículas para 200
    // Confete dos dois lados
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
}
