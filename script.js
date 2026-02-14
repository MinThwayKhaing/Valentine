const revealBtn = document.getElementById("revealBtn");
const letter = document.getElementById("letter");
const photo = document.getElementById("couplePhoto");

revealBtn.addEventListener("click", () => {
  letter.classList.toggle("is-hidden");
  const isHidden = letter.classList.contains("is-hidden");
  revealBtn.textContent = isHidden ? "Open my letter" : "Hide letter";
  letter.setAttribute("aria-hidden", String(isHidden));

  if (!isHidden) {
    spawnHearts(18);
  }
});

photo.addEventListener("error", () => {
  photo.style.objectFit = "contain";
  photo.style.background = "#ffe9da";
  photo.alt = "Add your photo at assets/our-photo.jpg";
});

function spawnHearts(count) {
  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.innerHTML = "&hearts;";
    heart.style.left = `${8 + Math.random() * 84}vw`;
    heart.style.animationDuration = `${4 + Math.random() * 4}s`;
    heart.style.fontSize = `${0.8 + Math.random() * 1.4}rem`;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }
}
