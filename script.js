/* Stars */
for (let i = 0; i < 40; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.opacity = Math.random();
  document.body.appendChild(star);
}

/* Wind Drift Background Flowers */
function createBackgroundFlower() {
  const flower = document.createElement("div");
  flower.className = "bg-flower";

  const flowers = ["🌸", "🌷", "🌺", "🌼"];
  flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = (10 + Math.random() * 16) + "px";
  flower.style.animationDuration = (10 + Math.random() * 6) + "s";

  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 20000);
}
setInterval(createBackgroundFlower, 1200);

/* Counter */
function updateCounter() {
  const startDate = new Date('2018-08-26');
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  document.getElementById('counter').innerText =
    `Together for ${diffDays} days and counting...`;
}

/* Modal */
function showMessage(text, imageUrl) {
  const box = document.getElementById('message-box');
  const messageText = document.getElementById('message-text');
  const messageImage = document.getElementById('message-image');

  messageText.innerText = text;

  if (imageUrl && !imageUrl.includes('YOUR_PHOTO_URL')) {
    messageImage.src = imageUrl;
    messageImage.style.display = 'block';
  } else {
    messageImage.src =
      'https://cdn-icons-png.flaticon.com/512/833/833472.png';
  }

  box.classList.remove('hidden');
}

function closeMessage() {
  document.getElementById('message-box').classList.add('hidden');
}

/* Confetti */
function confettiExplosion() {
  const colors = ["#ff4d6d","#ff85a1","#ffc2d1","#ff758f","#ffb3c6"];
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random()*colors.length)];
    confetti.style.left = Math.random()*100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "50%";
    confetti.style.zIndex = "9999";
    confetti.style.animation =
      `confettiFall ${3+Math.random()*2}s linear forwards`;
    document.body.appendChild(confetti);
    setTimeout(()=>confetti.remove(),5000);
  }
}

updateCounter();