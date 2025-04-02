document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
        burger.classList.toggle("toggle");
    });
});

function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "Countdown Expired!";
            clearInterval(timer);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
}

// Set the target date (YYYY, MM (0-based), DD, HH, MM, SS)
const countdownDate = new Date(2025, 3, 20, 12, 0, 0).getTime();
startCountdown(countdownDate);
