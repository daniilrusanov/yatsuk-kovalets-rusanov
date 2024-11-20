document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector(".menu-list");

    menuToggle.addEventListener("click", () => {
        menuList.classList.toggle("active"); 
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const coin = document.querySelector(".coin");

    menuToggle.addEventListener("mouseenter", () => {
        coin.classList.add("spin"); // Додаємо клас для запуску анімації

        // Видаляємо клас після завершення анімації
        coin.addEventListener(
            "animationend",
            () => {
                coin.classList.remove("spin");
            },
            { once: true } // Виконується лише один раз
        );
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const firefliesContainer = document.querySelector(".fireflies");
  
    for (let i = 0; i < 15; i++) {
      const firefly = document.createElement("div");
      firefly.classList.add("firefly");
  
      // Випадкове розташування початку
      firefly.style.top = `${Math.random() * 100}%`;
      firefly.style.left = `${Math.random() * 100}%`;
  
      // Випадкова затримка анімації
      firefly.style.animationDelay = `${Math.random() * 5}s`;
  
      // Випадкова швидкість анімації
      firefly.style.animationDuration = `${4 + Math.random() * 4}s`;
  
      firefliesContainer.appendChild(firefly);
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  