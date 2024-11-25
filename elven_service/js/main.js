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
  
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const donationForm = document.getElementById('donationForm');
    const donationAmount = document.getElementById('donationAmount');
    const fireworksContainer = document.getElementById('fireworks-container');

    // Відкриття модального вікна
    document.querySelector('.donate-button').addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Закриття модального вікна
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Генерація феєрверків
    const createFirework = (x, y) => {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        fireworksContainer.appendChild(firework);

        // Видалення феєрверка після анімації
        firework.addEventListener('animationend', () => firework.remove());
    };

    const showFireworks = () => {
        for (let i = 0; i < 10; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createFirework(x, y);
        }
    };

    // Обробка форми донату
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const amount = donationAmount.value;
        if (amount && amount > 0) {
            // Показати феєрверки
            showFireworks();

            // Закрити модальне вікно
            setTimeout(() => {
                modal.style.display = 'none';
            }, 1000);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
  
    function checkVisibility() {
      fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility initially
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.hero-img, .title-image, .footer-logo');
  
    function checkVisibility() {
      icons.forEach(icon => {
        const rect = icon.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          icon.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Перевірка видимості при завантаженні сторінки
  });
    

  const images = document.querySelectorAll('.mission-img');
  const prevBtn = document.querySelector('.gallery-btn.prev');
  const nextBtn = document.querySelector('.gallery-btn.next');
  
  let currentIndex = 0;
  
  // Функція для показу активного зображення
  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove('act');
      if (i === index) {
        img.classList.add('act');
      }
    });
  }
  
  // Події для кнопок
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
  
  // Відображення першого зображення на старті
  showImage(currentIndex);
  