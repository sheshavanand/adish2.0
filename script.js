// Relationship start date: January 19, 2025 at 11:52 PM
const relationshipStart = new Date("2025-01-19T23:52:00");

function updateTimer() {
  const now = new Date();
  const timeDiff = now - relationshipStart;

  // Calculate time units
  const totalSeconds = Math.floor(timeDiff / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  // Calculate years and months more accurately
  let years = now.getFullYear() - relationshipStart.getFullYear();
  let months = now.getMonth() - relationshipStart.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust for day of month
  if (now.getDate() < relationshipStart.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  // Calculate remaining days after years and months
  const tempDate = new Date(relationshipStart);
  tempDate.setFullYear(tempDate.getFullYear() + years);
  tempDate.setMonth(tempDate.getMonth() + months);
  const remainingDays = Math.floor((now - tempDate) / (1000 * 60 * 60 * 24));

  // Calculate hours, minutes, seconds for current day
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Update the display
  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = remainingDays;
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

// Update timer immediately and then every second
updateTimer();
setInterval(updateTimer, 1000);

// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Add click effect to timer boxes
  const timerBoxes = document.querySelectorAll(".timer-box");
  timerBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "translateY(-5px)";
      }, 150);
    });
  });

  // Add parallax effect to floating hearts
  document.addEventListener("mousemove", function (e) {
    const hearts = document.querySelectorAll(".heart");
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    hearts.forEach((heart, index) => {
      const speed = (index + 1) * 0.5;
      const x = mouseX * speed * 10;
      const y = mouseY * speed * 10;
      heart.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  // Add smooth scroll behavior for better UX
  document.documentElement.style.scrollBehavior = "smooth";

  // Add entrance animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe sections for animation
  const sections = document.querySelectorAll(
    ".timer-section, .gallery-section, .message-section"
  );
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Photo gallery lazy loading effect
  const photos = document.querySelectorAll(".photo-item");
  photos.forEach((photo, index) => {
    photo.style.opacity = "0";
    photo.style.transform = "translateY(20px)";
    photo.style.transition = `opacity 0.5s ease ${
      index * 0.1
    }s, transform 0.5s ease ${index * 0.1}s`;

    setTimeout(() => {
      photo.style.opacity = "1";
      photo.style.transform = "translateY(0)";
    }, 500 + index * 100);
  });
});

// Special birthday message for October 9th
function checkBirthdayDate() {
  const today = new Date();
  const isOctober9th = today.getMonth() === 9 && today.getDate() === 9; // October is month 9 (0-indexed)

  const birthdayContent = document.getElementById("birthday-content");
  const regularContent = document.getElementById("regular-content");

  if (isOctober9th) {
    // Show birthday content, hide regular content
    birthdayContent.style.display = "block";
    regularContent.style.display = "none";

    // Add birthday background animation
    document.body.classList.add("birthday-bg");

    // Start all birthday animations
    startBirthdayAnimations();

    // Show special birthday alert after a delay with enhanced effects
    setTimeout(() => {
      // Create massive celebration burst before alert
      createMegaCelebration();
      setTimeout(() => {
        alert("🎉 HAPPY BIRTHDAY ADI! 🎂✨ Today is your special day! 💕🎈");
      }, 1000);
    }, 3000);
  } else {
    // Show regular content, hide birthday content
    birthdayContent.style.display = "none";
    regularContent.style.display = "block";
  }

  // Set dynamic message content
  setMessageContent(isOctober9th);
}

// Set message content based on whether it's birthday or regular day
function setMessageContent(isBirthday) {
  const messageTitle = document.getElementById("message-title");
  const loveLetter = document.getElementById("love-letter");

  if (isBirthday) {
    // Birthday message
    messageTitle.textContent = "A Special Message 💌";
    loveLetter.innerHTML = `
      <p>Dear Adi,</p>
      <p>On this special day, I want you to know how much you mean to me. Every moment we've shared has been a treasure, and I'm so grateful to have you in my life.</p>
      <p>Happy Birthday, my love! Here's to many more beautiful memories together. 💕</p>
      <p>With all my love,<br>Sheshav ❤️</p>
    `;
  } else {
    // Regular love message
    messageTitle.textContent = "From My Heart to Yours 💕";

    // Array of different romantic messages for variety
    const loveMessages = [
      {
        content: `
          <p>My Dearest Adi,</p>
          <p>Every day since January 19th has been a beautiful chapter in our love story. You've brought so much joy, laughter, and warmth into my life that I never knew was possible.</p>
          <p>I love how your smile lights up my world, how your laugh makes everything better, and how being with you feels like home. You're not just my girlfriend, you're my best friend, my partner, and my greatest blessing.</p>
          <p>Thank you for choosing to walk this journey with me. I can't wait to create more magical memories together. 💕</p>
          <p>Forever yours,<br>Sheshav ✨</p>
        `,
      },
      {
        content: `
          <p>Beautiful Adi,</p>
          <p>Looking at our timer reminds me of how quickly time flies when you're with someone you love. Each second, minute, and day we've spent together has been a gift I treasure deeply.</p>
          <p>You've made me a better person just by being yourself. Your kindness, your dreams, your silly jokes, and even the way you scrunch your nose when you're thinking - I love every little thing about you.</p>
          <p>Our love story is still being written, and I'm so excited for all the adventures, cuddles, and beautiful moments that await us. 🌸</p>
          <p>With endless love,<br>Sheshav 💖</p>
        `,
      },
      {
        content: `
          <p>My Sweet Adi,</p>
          <p>Sometimes I look at you and can't believe how lucky I am. From that first moment we connected, I knew there was something special about you - something that made my heart skip a beat.</p>
          <p>You've shown me what real love feels like. It's in the quiet moments when we're just being ourselves, in your encouraging words when I need them most, and in the way you make ordinary days feel extraordinary.</p>
          <p>I promise to love you through all seasons of life, to support your dreams, and to always remind you how amazing you are. 🦋</p>
          <p>All my love, always,<br>Sheshav 💝</p>
        `,
      },
    ];

    // Select a random message or use date-based selection for consistency
    const messageIndex =
      Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % loveMessages.length;
    loveLetter.innerHTML = loveMessages[messageIndex].content;
  }
}

function startBirthdayAnimations() {
  // Start continuous animations with more frequency and variety
  createFallingHearts();
  createSparkles();
  createConfetti();
  createPartyPoppers();
  createFireworks();
  createStarBurst();
  createFloatingBalloons();
  createShimmerWaves();
  createRainbowSparkles();
  createMagicDust();

  // Set intervals for continuous effects - more frequent and varied
  setInterval(createFallingHearts, 1500);
  setInterval(createSparkles, 500);
  setInterval(createConfetti, 2000);
  setInterval(createPartyPoppers, 3000);
  setInterval(createFireworks, 4000);
  setInterval(createStarBurst, 2500);
  setInterval(createFloatingBalloons, 6000);
  setInterval(createShimmerWaves, 3500);
  setInterval(createRainbowSparkles, 800);
  setInterval(createMagicDust, 1200);

  // Add birthday-specific transitions to existing elements
  addBirthdayTransitions();
}

function createFallingHearts() {
  const hearts = ["💕", "💖", "💗", "💝", "❤️", "💜", "🩷", "🤍"];

  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "falling-heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDelay = Math.random() * 2 + "s";
      heart.style.fontSize = Math.random() * 1.5 + 1 + "rem";

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 4000);
    }, i * 200);
  }
}

function createSparkles() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.top = Math.random() * 100 + "vh";
      sparkle.style.animationDelay = Math.random() * 1 + "s";

      // Random sparkle sizes for variety
      const size = Math.random() * 6 + 2;
      sparkle.style.width = size + "px";
      sparkle.style.height = size + "px";

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 2000);
    }, i * 50);
  }
}

function createConfetti() {
  const colors = [
    "#FF69B4",
    "#FFB6C1",
    "#FFC0CB",
    "#FF1493",
    "#DA70D6",
    "#FFD700",
    "#FF6347",
    "#98FB98",
  ];
  const shapes = ["circle", "square", "triangle"];

  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 1 + "s";
      confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

      // Random shapes
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      if (shape === "circle") {
        confetti.style.borderRadius = "50%";
      } else if (shape === "triangle") {
        confetti.style.width = "0";
        confetti.style.height = "0";
        confetti.style.borderLeft = "5px solid transparent";
        confetti.style.borderRight = "5px solid transparent";
        confetti.style.borderBottom =
          "10px solid " + colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = "transparent";
      }

      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 3000);
    }, i * 100);
  }
}

function createPartyPoppers() {
  const poppers = ["🎉", "🎊", "🎈", "🎁", "🎂", "✨"];

  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const popper = document.createElement("div");
      popper.className = "party-popper";
      popper.textContent = poppers[Math.floor(Math.random() * poppers.length)];
      popper.style.left = Math.random() * 100 + "vw";
      popper.style.top = Math.random() * 50 + "vh";
      popper.style.animationDelay = Math.random() * 1 + "s";

      document.body.appendChild(popper);

      setTimeout(() => popper.remove(), 2000);
    }, i * 300);
  }
}

function createFireworks() {
  const colors = [
    "#FF69B4",
    "#FFD700",
    "#FF6347",
    "#98FB98",
    "#87CEEB",
    "#DDA0DD",
  ];

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const firework = document.createElement("div");
      firework.className = "firework";
      firework.style.left = Math.random() * 100 + "vw";
      firework.style.top = Math.random() * 50 + "vh";
      firework.style.color = colors[Math.floor(Math.random() * colors.length)];
      firework.style.animationDelay = Math.random() * 1 + "s";

      document.body.appendChild(firework);

      setTimeout(() => firework.remove(), 1500);
    }, i * 400);
  }
}

// Add special click effects for birthday
function addBirthdayInteractions() {
  const today = new Date();
  const isOctober9th = today.getMonth() === 9 && today.getDate() === 9;

  if (isOctober9th) {
    // Add click effects anywhere on the page
    document.addEventListener("click", function (e) {
      createClickExplosion(e.clientX, e.clientY);
    });

    // Add hover effects to photos
    const photos = document.querySelectorAll(".photo-item");
    photos.forEach((photo) => {
      photo.addEventListener("mouseenter", function () {
        createSparklesBurst(this);
      });
    });
  }
}

function createClickExplosion(x, y) {
  const colors = [
    "#FF69B4",
    "#FFD700",
    "#FF6347",
    "#98FB98",
    "#DDA0DD",
    "#FFA500",
  ];

  // Create main explosion particles
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.width = Math.random() * 8 + 4 + "px";
    particle.style.height = Math.random() * 8 + 4 + "px";
    particle.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.zIndex = "9999";
    particle.style.boxShadow = "0 0 10px currentColor";

    const angle = (i / 20) * Math.PI * 2;
    const velocity = 80 + Math.random() * 80;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;

    particle.style.animation = `explodeParticle 1.5s ease-out forwards`;
    particle.style.setProperty("--vx", vx + "px");
    particle.style.setProperty("--vy", vy + "px");

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1500);
  }

  // Create secondary sparkle burst
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = x + (Math.random() - 0.5) * 100 + "px";
      sparkle.style.top = y + (Math.random() - 0.5) * 100 + "px";
      sparkle.style.animationDelay = "0s";

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 2000);
    }, i * 50);
  }

  // Create heart burst
  const hearts = ["💕", "💖", "💗", "💝"];
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.style.position = "fixed";
      heart.style.left = x + "px";
      heart.style.top = y + "px";
      heart.style.fontSize = "1.5rem";
      heart.style.pointerEvents = "none";
      heart.style.zIndex = "9999";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

      const angle = (i / 5) * Math.PI * 2;
      const distance = 50 + Math.random() * 30;
      const targetX = x + Math.cos(angle) * distance;
      const targetY = y + Math.sin(angle) * distance;

      heart.style.animation = "heartBurst 2s ease-out forwards";
      heart.style.setProperty("--target-x", targetX + "px");
      heart.style.setProperty("--target-y", targetY + "px");

      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 2000);
    }, i * 100);
  }
}

function createSparklesBurst(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = centerX + (Math.random() - 0.5) * 150 + "px";
      sparkle.style.top = centerY + (Math.random() - 0.5) * 150 + "px";

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 2000);
    }, i * 30);
  }
}

// New birthday animation functions
function createStarBurst() {
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const star = document.createElement("div");
      star.className = "star-burst";
      star.textContent = "⭐";
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * 100 + "vh";
      star.style.fontSize = Math.random() * 1.5 + 1 + "rem";
      star.style.animationDelay = Math.random() * 1 + "s";

      document.body.appendChild(star);

      setTimeout(() => star.remove(), 3000);
    }, i * 200);
  }
}

function createFloatingBalloons() {
  const balloons = ["🎈", "🎀", "🌟", "💫", "🎊"];

  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const balloon = document.createElement("div");
      balloon.className = "floating-balloon";
      balloon.textContent =
        balloons[Math.floor(Math.random() * balloons.length)];
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.fontSize = Math.random() * 1.5 + 1.5 + "rem";
      balloon.style.animationDelay = Math.random() * 2 + "s";

      document.body.appendChild(balloon);

      setTimeout(() => balloon.remove(), 8000);
    }, i * 400);
  }
}

function createShimmerWaves() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const wave = document.createElement("div");
      wave.className = "shimmer-wave";
      wave.style.left = Math.random() * 100 + "vw";
      wave.style.top = Math.random() * 100 + "vh";
      wave.style.animationDelay = Math.random() * 1 + "s";

      document.body.appendChild(wave);

      setTimeout(() => wave.remove(), 4000);
    }, i * 500);
  }
}

function createRainbowSparkles() {
  const colors = [
    "#FF69B4",
    "#FFD700",
    "#FF6347",
    "#98FB98",
    "#87CEEB",
    "#DDA0DD",
    "#FFA500",
  ];

  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "rainbow-sparkle";
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.top = Math.random() * 100 + "vh";
      sparkle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.animationDelay = Math.random() * 1 + "s";

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 3000);
    }, i * 40);
  }
}

function createMagicDust() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const dust = document.createElement("div");
      dust.className = "magic-dust";
      dust.style.left = Math.random() * 100 + "vw";
      dust.style.top = Math.random() * 100 + "vh";
      dust.style.animationDelay = Math.random() * 2 + "s";

      document.body.appendChild(dust);

      setTimeout(() => dust.remove(), 4000);
    }, i * 30);
  }
}

function addBirthdayTransitions() {
  // Add special birthday transitions to timer boxes
  const timerBoxes = document.querySelectorAll(".timer-box");
  timerBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.style.animation = "birthdayPulse 2s ease-in-out infinite alternate";
      box.style.boxShadow =
        "0 0 20px rgba(255, 105, 180, 0.6), 0 5px 15px rgba(0,0,0,0.1)";
    }, index * 200);
  });

  // Add sparkle trail to photos
  const photos = document.querySelectorAll(".photo-item");
  photos.forEach((photo, index) => {
    setTimeout(() => {
      photo.style.boxShadow =
        "0 0 25px rgba(255, 215, 0, 0.4), 0 15px 35px rgba(0,0,0,0.2)";
      photo.style.filter = "brightness(1.1) saturate(1.2)";
    }, index * 100);
  });

  // Add birthday glow to sections
  const sections = document.querySelectorAll(
    ".timer-section, .gallery-section, .message-section"
  );
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.style.boxShadow =
        "0 0 30px rgba(255, 182, 193, 0.3), 0 10px 30px rgba(0,0,0,0.1)";
      section.style.borderColor = "rgba(255, 105, 180, 0.5)";
    }, index * 300);
  });
}

function createMegaCelebration() {
  // Create massive confetti explosion
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      createConfetti();
    }, i * 20);
  }

  // Create sparkle storm
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      createSparkles();
    }, i * 30);
  }

  // Create heart shower
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createFallingHearts();
    }, i * 40);
  }

  // Create firework finale
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      createFireworks();
    }, i * 100);
  }

  // Screen flash effect
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100vw";
  flash.style.height = "100vh";
  flash.style.background =
    "radial-gradient(circle, rgba(255,215,0,0.3), rgba(255,105,180,0.2), transparent)";
  flash.style.pointerEvents = "none";
  flash.style.zIndex = "10000";
  flash.style.animation = "megaFlash 2s ease-out forwards";

  document.body.appendChild(flash);

  setTimeout(() => flash.remove(), 2000);
}

// Add particle explosion and heart burst animations
const particleStyle = document.createElement("style");
particleStyle.textContent = `
    @keyframes explodeParticle {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--vx), var(--vy)) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes heartBurst {
        0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translate(calc(var(--target-x) - 50%), calc(var(--target-y) - 50%)) scale(1.2) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: translate(calc(var(--target-x) - 50%), calc(var(--target-y) - 50%)) scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Auto-resize photos based on their aspect ratio
function setupPhotoSizes() {
  const photos = document.querySelectorAll(".photo-item");
  const baseSizes = [
    280, 220, 250, 200, 240, 180, 260, 210, 230, 190, 270, 200, 250, 220, 240,
    180, 260, 210, 230, 200,
  ];

  photos.forEach((photoItem, index) => {
    const img = photoItem.querySelector("img");
    const baseSize = baseSizes[index] || 220;

    // Set initial size
    photoItem.style.width = baseSize + "px";
    photoItem.style.height = baseSize * 0.75 + "px";

    img.onload = function () {
      const aspectRatio = this.naturalWidth / this.naturalHeight;
      let width, height;

      if (aspectRatio > 1.3) {
        // Landscape photo
        width = baseSize;
        height = baseSize * 0.65;
      } else if (aspectRatio < 0.8) {
        // Portrait photo
        width = baseSize * 0.75;
        height = baseSize;
      } else {
        // Square-ish photo
        width = baseSize * 0.9;
        height = baseSize * 0.9;
      }

      // Add some random variation (±15px)
      const variation = (Math.random() - 0.5) * 30;
      width += variation;
      height += variation;

      // Ensure minimum sizes
      width = Math.max(width, 160);
      height = Math.max(height, 120);

      photoItem.style.width = width + "px";
      photoItem.style.height = height + "px";

      // Add floating animation with the rotation
      const rotation = photoItem.style.getPropertyValue("--rotation") || "0deg";
      photoItem.style.setProperty("--rotation", rotation);
    };

    // If image is already loaded (cached)
    if (img.complete) {
      img.onload();
    }
  });
}

// Enhanced floating animation with mouse interaction
function addMouseInteractionToPhotos() {
  const photos = document.querySelectorAll(".photo-item");

  photos.forEach((photo) => {
    photo.addEventListener("mouseenter", function () {
      // Pause floating animation and add gentle hover float
      this.style.animationPlayState = "paused";
      this.style.transform = "scale(1.15) rotate(0deg) translateY(-10px)";
    });

    photo.addEventListener("mouseleave", function () {
      // Resume floating animation
      this.style.animationPlayState = "running";
      this.style.transform = "";
    });
  });
}

// Add gentle parallax effect to photos based on mouse movement
function addParallaxToPhotos() {
  document.addEventListener("mousemove", function (e) {
    const photos = document.querySelectorAll(".photo-item:not(:hover)");
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    photos.forEach((photo, index) => {
      const speed = ((index % 3) + 1) * 0.5; // Different speeds for variety
      const x = mouseX * speed * 10;
      const y = mouseY * speed * 10;

      // Only apply if not being hovered
      if (!photo.matches(":hover")) {
        const currentTransform = photo.style.transform || "";
        if (!currentTransform.includes("scale")) {
          photo.style.transform = `translate(${x}px, ${y}px)`;
        }
      }
    });
  });
}

// Initialize photo effects
function initializePhotoEffects() {
  setupPhotoSizes();
  addMouseInteractionToPhotos();
  addParallaxToPhotos();

  // Add staggered entrance animation
  const photos = document.querySelectorAll(".photo-item");
  photos.forEach((photo, index) => {
    photo.style.opacity = "0";
    photo.style.transform = "translateY(50px) scale(0.8)";

    setTimeout(() => {
      photo.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      photo.style.opacity = "1";
      photo.style.transform = "";

      // Start floating animation after entrance
      setTimeout(() => {
        photo.style.transition = "";
      }, 800);
    }, index * 150);
  });
}

// Check if it's birthday when page loads
checkBirthdayDate();

// Add birthday interactions
addBirthdayInteractions();

// Initialize photo effects when page loads
document.addEventListener("DOMContentLoaded", initializePhotoEffects);
