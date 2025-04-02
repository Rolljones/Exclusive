document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
        burger.classList.toggle("toggle");
    });
});

document.getElementById("sign").addEventListener("click", function() {
    window.location.href = "https://accounts.google.com/signin";
  });