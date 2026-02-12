const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
});

function startJourney() {
    const audio = document.getElementById("bgMusic");
    audio.volume = 0.6;
    audio.play();

    const landing = document.getElementById("landingScreen");
    const main = document.getElementById("mainContent");

    landing.style.display = "none";
    main.style.display = "block";

    setTimeout(() => {
        main.style.opacity = "1";
    }, 100);

    document.querySelectorAll('.reveal')
        .forEach((el) => observer.observe(el));
}

function showLove() {
    document.getElementById('hiddenMessage')
        .classList.remove("hidden");

    document.getElementById('loveBtn')
        .innerText = "Forever Yours ❤️";

    triggerConfetti();
}

function triggerConfetti() {
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });
}
