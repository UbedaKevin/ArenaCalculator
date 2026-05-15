function calcPoints(rating, mult) {
  if (!rating) return 0;
  let p = ((1651.94 - 475) / (1 + 2500000 * Math.pow(2.71828, -0.009 * rating)) + 475) * 1.5;
  return Math.round(p * mult);
}

function calc() {
  let r2 = document.getElementById('r2').value;
  let r3 = document.getElementById('r3').value;
  let r5 = document.getElementById('r5').value;

  let p2 = calcPoints(r2, 0.76);
  let p3 = calcPoints(r3, 0.88);
  let p5 = calcPoints(r5, 1.0);

  document.getElementById('res2').innerText = p2;
  document.getElementById('res3').innerText = p3;
  document.getElementById('res5').innerText = p5;

  let best = Math.max(p2, p3, p5);
  document.getElementById('best').innerText = best;
  
  // Determine which bracket has the best points
  let bracket = '';
  if (best === p2) {
    bracket = '2v2';
  } else if (best === p3) {
    bracket = '3v3';
  } else {
    bracket = '5v5';
  }
  document.getElementById('bracket').innerText = bracket;
}

document.getElementById('refresh').addEventListener('click', function() {
    document.getElementById('res2').innerText = 0;
    document.getElementById('res3').innerText = 0;
    document.getElementById('res5').innerText = 0;
    document.getElementById('best').innerText = 0;
    document.getElementById('r2').value = '';
    document.getElementById('r3').value = '';
    document.getElementById('r5').value = '';
});


function handleInput(el) {
  // limite à 4 caractères
  if (el.value.length > 4) {
    el.value = el.value.slice(0, 4);
  }

  // ton calcul
  calc();
}


(function () {
  const timerEl = document.getElementById("timer");
  const timerTextEl = document.getElementById("timer-text");
  timerTextEl.textContent = "Season 2 Start in :";

  // Date cible : 19 mai de l'année en cours à 00:00:00
  const targetDate = new Date(new Date().getFullYear(), 4, 19, 0, 0, 0);

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      timerEl.textContent = "* Live data: 3 bracket(s) loaded";
      timerTextEl.textContent = "Season 2 is live!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timerEl.textContent =
      `${days}j ${hours}h ${minutes}m ${seconds}s`;
  }

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
})();