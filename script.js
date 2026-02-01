// 1. SCROLL REVEAL LOGIC
// Ye check karega ki element screen par dikh raha hai ya nahi
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            // Agar element dikha, toh 'active' class add karo (animation play hogi)
            entry.target.classList.add('active');
        }
    });
});

// 2. START JOURNEY FUNCTION
function startJourney() {
    var audio = document.getElementById("bgMusic");
    audio.volume = 0.6; 
    
    // Play Music
    audio.play().then(() => {
        console.log("Music started!");
    }).catch((error) => {
        console.log("Music error:", error);
    });

    // Hide Landing Screen
    var landingScreen = document.getElementById("landingScreen");
    var mainContent = document.getElementById("mainContent");

    landingScreen.style.opacity = "0";

    setTimeout(function() {
        landingScreen.style.display = "none";
        mainContent.style.display = "block";
        
        setTimeout(() => {
            mainContent.style.opacity = "1";
            
            // Ab hum observer ko bolenge ki sabhi 'reveal' class wale elements par nazar rakhe
            const hiddenElements = document.querySelectorAll('.reveal');
            hiddenElements.forEach((el) => observer.observe(el));
            
        }, 50);

    }, 1000);
}


// 3. SURPRISE BUTTON FUNCTION
function showLove() {
    const message = document.getElementById('hiddenMessage');
    const btn = document.getElementById('loveBtn');

    message.style.display = "block";
    btn.innerText = "Hamesha Tera Rahunga! ❤️";
    
    triggerConfetti();
}

function triggerConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
    }, 250);
}