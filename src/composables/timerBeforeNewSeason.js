export default function timerBeforeNewSeason(timerEl, timerTextEl) {
  const text = timerTextEl;
  const timer = timerEl;

  text.value = 'Season 2 Start in :';

  const targetDate = new Date(new Date().getFullYear(), 4, 19, 0, 0, 0);

  let interval;

  function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      timer.value = '* Live data: 3 bracket(s) loaded';
      text.value = 'Season 2 is live!';
      clearInterval(interval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.value = `${days}j ${hours}h ${minutes}m ${seconds}s`;
  }

  updateTimer();
  interval = setInterval(updateTimer, 1000);
}
