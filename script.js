const revealBtn = document.getElementById("revealBtn");
const letter = document.getElementById("letter");
const photo = document.getElementById("couplePhoto");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (revealBtn && letter) {
  revealBtn.addEventListener("click", () => {
    letter.classList.toggle("is-hidden");
    const isHidden = letter.classList.contains("is-hidden");
    revealBtn.textContent = isHidden ? "Unseal My Love Letter" : "Seal It Again";
    letter.setAttribute("aria-hidden", String(isHidden));

    if (!isHidden && !reduceMotion) {
      spawnBurst(28);
    }
  });
}

if (photo) {
  photo.addEventListener("error", () => {
    photo.style.objectFit = "contain";
    photo.style.background = "#ffe9da";
    photo.alt = "Add your photo at assets/our-photo.jpg";
  });
}

if (!reduceMotion) {
  startPetals();
}

function spawnBurst(count) {
  const symbols = ["&hearts;", "&#10022;", "&#10085;"];

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-burst";
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${5 + Math.random() * 90}vw`;
    heart.style.fontSize = `${0.72 + Math.random() * 1.2}rem`;
    heart.style.opacity = `${0.55 + Math.random() * 0.4}`;
    heart.style.animationDuration = `${3.8 + Math.random() * 3.4}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7600);
  }
}

function startPetals() {
  setInterval(() => {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.innerHTML = "&hearts;";
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.opacity = `${0.15 + Math.random() * 0.35}`;
    petal.style.fontSize = `${0.52 + Math.random() * 0.9}rem`;
    petal.style.animationDuration = `${8 + Math.random() * 5}s`;
    petal.style.setProperty("--drift", `${-24 + Math.random() * 48}vw`);
    document.body.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 14000);
  }, 780);
}
