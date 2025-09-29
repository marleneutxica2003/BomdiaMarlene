document.addEventListener("DOMContentLoaded", () => {
  const heartBtn = document.getElementById("heart-btn");
  const startScreen = document.getElementById("start-screen");
  const gallery = document.getElementById("gallery");
  const photos = document.querySelectorAll(".photo");
  let currentPhoto = 0;

  // Explosão de corações e confetis
  function explodeHearts() {
    for (let i = 0; i < 50; i++) {
      const heart = document.createElement("div");
      heart.className = "explosion-heart";
      heart.style.left = (50 + Math.random() * 40 - 20) + "%";
      heart.style.top = (50 + Math.random() * 40 - 20) + "%";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 2000);
    }
  }

  // Mostrar fotos em sequência
  function showPhotos() {
    photos[currentPhoto].classList.add("active");

    setInterval(() => {
      photos[currentPhoto].classList.remove("active");
      currentPhoto = (currentPhoto + 1) % photos.length;
      photos[currentPhoto].classList.add("active");
    }, 4000);
  }

  // Clique no coração
  heartBtn.addEventListener("click", () => {
    explodeHearts();
    setTimeout(() => {
      startScreen.style.display = "none";
      gallery.classList.remove("hidden");
      showPhotos();
    }, 1500);
  });
});

// Estilos para explosão
const style = document.createElement("style");
style.innerHTML = `
.explosion-heart {
  position: fixed;
  width: 20px;
  height: 20px;
  background: pink;
  transform: rotate(45deg);
  animation: fly 2s ease forwards;
  z-index: 9999;
}
.explosion-heart:before,
.explosion-heart:after {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: pink;
  position: absolute;
}
.explosion-heart:before {
  top: -10px;
  left: 0;
}
.explosion-heart:after {
  left: 10px;
  top: 0;
}
@keyframes fly {
  from { transform: translate(0,0) rotate(45deg); opacity: 1; }
  to { transform: translate(${Math.random()*400-200}px, ${Math.random()*400-200}px) rotate(45deg); opacity: 0; }
}
`;
document.head.appendChild(style);