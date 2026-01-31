const openBtn = document.getElementById("openBtn");
const envelopeScreen = document.getElementById("envelopeScreen");
const envelope = document.querySelector(".envelope");
const pages = document.getElementById("pages");
const music = document.getElementById("bgMusic");
const intro = document.getElementById("videoIntro");
const introVideo = document.getElementById("introVideo");
const skipIntro = document.getElementById("skipIntro");

const videoIntro = document.getElementById("videoIntro");

const video = document.getElementById("introVideo");

let started = false;

// أول tap فقط
intro.addEventListener("click", () => {
    if (started) return;
    started = true;

    // Set white background and start translation animation
    document.body.classList.add('video-start');
    intro.classList.add('playing');

    video.play();
    music.volume = 0.4;
    music.play();
    document.querySelector(".tap-text").style.display = "none";
});

// كي الفيديو يكمّل
video.addEventListener("ended", () => {

    // animate out (translate + fade)
    intro.classList.remove('playing');
    intro.classList.add('fade-out');

    setTimeout(() => {
        intro.style.display = "none";
        document.body.classList.remove('video-start');
        pages.classList.remove("hidden");
        document.body.style.overflow = "auto";

        music.volume = 0.4;
        music.play();

        document.getElementById("page1").scrollIntoView({
            behavior: "instant"
        });

    }, 1000);
});

openBtn.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {
        envelopeScreen.style.display = "none";
        pages.classList.remove("hidden");
        document.body.style.overflow = "auto";

        music.volume = 0.4;
        music.play();

        document.getElementById("page1").scrollIntoView({
            behavior: "instant"
        });

    }, 3500);
});

// RSVP form handling (client-side only)
const rsvpForm = document.getElementById('rsvpForm');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = rsvpForm.querySelector('input[name="name"]').value.trim();
        const email = rsvpForm.querySelector('input[name="email"]').value.trim();
        // basic validation
        if (!name || !email) {
            alert('Veuillez saisir votre nom et adresse e-mail.');
            return;
        }
        rsvpForm.reset();
        const thanks = document.getElementById('rsvpThanks');
        if (thanks) {
            thanks.style.display = 'block';
            setTimeout(() => { thanks.style.opacity = '1'; }, 10);
            // hide after 4s
            setTimeout(() => { thanks.style.opacity = '0'; setTimeout(() => { thanks.style.display = 'none'; }, 400); }, 4000);
        }
    });
}

