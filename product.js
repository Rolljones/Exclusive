document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("active");
        burger.classList.toggle("toggle");
    });
});

const items = document.querySelectorAll('.item');
const panels = document.querySelectorAll('.panel');

let currentVisiblePanel = null;

items.forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const targetPanel = document.getElementById(targetId);

    if (currentVisiblePanel === targetPanel) {
      // Same panel clicked again — hide it
      targetPanel.style.display = 'none';
      currentVisiblePanel = null;
    } else {
      // Hide all panels
      panels.forEach(panel => {
        panel.style.display = 'none';
      });

      // Show the new one with animation
      targetPanel.style.display = 'block';
      targetPanel.style.animation = 'slideIn 0.4s ease forwards';

      currentVisiblePanel = targetPanel;
    }
  });
});