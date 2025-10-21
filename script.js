const eventDate = new Date("2025-12-07T14:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownDiv = document.getElementById('countdown');

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownDiv.innerHTML = "¡🥳 **LA FIESTA YA EMPEZÓ**! 🎈";
        countdownDiv.style.color = "var(--primary-color)";
        countdownDiv.style.fontSize = "1.5em";
        countdownDiv.style.fontWeight = "bold";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = days < 10 ? '0' + days : days;
    hoursEl.innerText = hours < 10 ? '0' + hours : hours;
    minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);