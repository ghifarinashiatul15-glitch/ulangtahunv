
// ===================================
// 🔐 PASSWORD WEBSITE
// ===================================

const SITE_PASSWORD = "172011";
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("passwordInput").value;
    const error = document.getElementById("passwordError");

    if (password === SITE_PASSWORD) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("siteContent").hidden = false;
        document.body.classList.remove("password-locked");

        if (typeof celebrate === "function") {
            celebrate();
        }
    } else {
        error.textContent = "Password salah! Coba lagi ya 💗";
        document.getElementById("passwordInput").value = "";
    }
});

// ===================================
// 🎵 MUSIC PLAYER
// Until I Found You
// ===================================

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.getElementById("musicButton");

    if (music.paused) {
        music.play()
            .then(() => {
                btn.textContent = "♫ Matikan musik";
            })
            .catch(error => {
                console.log("Musik gagal diputar:", error);
                btn.textContent = "♫ Coba putar lagi";
            });
    } else {
        music.pause();
        btn.textContent = "♫ Putar musik";
    }
}


// ===================================
// 🎁 GIFT SURPRISE
// ===================================

function openGift() {
    document.getElementById("giftMessage")
        .classList.add("show");

    document.getElementById("giftButton")
        .textContent = "💝";

    celebrate();
}


// ===================================
// 💌 SECRET LETTER
// ===================================

function toggleLetter() {
    const letter = document.getElementById("secretLetter");

    letter.classList.toggle("show");

    document.getElementById("letterButton").textContent =
        letter.classList.contains("show")
        ? "Tutup surat 💗"
        : "💌 Buka surat rahasia";

    if (letter.classList.contains("show")) {
        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}


// ===================================
// 💗 HEART CONFETTI ANIMATION
// ===================================

function celebrate() {
    const symbols = ["💗", "♡", "✨", "🌸", "💕"];

    for (let i = 0; i < 32; i++) {
        const el = document.createElement("span");

        el.className = "confetti";

        el.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        el.style.left = Math.random() * 100 + "vw";

        el.style.animationDuration =
            (2.5 + Math.random() * 2.5) + "s";

        el.style.fontSize =
            (14 + Math.random() * 18) + "px";

        document.body.appendChild(el);

        setTimeout(() => {
            el.remove();
        }, 5200);
    }
}
