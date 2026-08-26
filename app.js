const yes = document.getElementById("yes");
const no = document.getElementById("no");
const gif = document.getElementById("gif");
const text = document.getElementById("text");
const video = document.getElementById("video");

const landingScreen = document.getElementById("landingScreen");
const openBtn = document.getElementById("openBtn");

let stage = 0;
let teleportMode = false;

// OPEN LETTER LANDING SCREEN
openBtn.addEventListener("click", function () {
    landingScreen.classList.add("hidden");
});

// PRELOAD IMAGES & GIFS
[
    "letter.png",
    "cat-heart.gif",
    "rusure.gif",
    "3shocked-1.gif",
    "4.crying.gif",
    "5.crying.gif",
    "idc.gif"
].forEach(function (src) {
    const img = new Image();
    img.src = src;
});

// NO BUTTON CLICK
no.addEventListener("click", function (event) {
    event.preventDefault();

    if (teleportMode) {
        moveNoButton();
        return;
    }

    if (stage === 0) {
        gif.src = "rusure.gif";
        text.innerHTML =
            "Achhaaa 😭❤️<br>" +
            "Sorry bol diya na... ab thoda sa smile bhi kar do 🥺";

        yes.style.width = "62%";
        yes.style.height = "70%";
        no.style.width = "28%";

        stage = 1;
        return;
    }

    if (stage === 1) {
        gif.src = "3shocked-1.gif";
        text.innerHTML =
            "Okay, I get it 😭<br>" +
            "Galti meri thi, aur main maan raha hoon.<br>" +
            "Bas mujhse zyada der naraz mat raho 🥹";

        yes.style.width = "72%";
        yes.style.height = "75%";
        no.style.width = "22%";

        stage = 2;
        return;
    }

    if (stage === 2) {
        gif.src = "4.crying.gif";
        text.innerHTML =
            "Mansi please 🥺❤️<br>" +
            "Tumse baat kiye bina din thoda ajeeb sa lagta hai...<br>" +
            "Ab gussa chhod do na 🫶🏻";

        yes.style.width = "82%";
        yes.style.height = "82%";
        no.style.width = "16%";

        stage = 3;
        return;
    }

    if (stage === 3) {
        gif.src = "5.crying.gif";
        text.innerHTML =
            "Bas ab maan bhi jao na Mansi 🥺❤️<br>" +
            "Tumse baat na ho toh achha nahi lagta yaar... 🫶🏻";

        yes.style.width = "92%";
        yes.style.height = "90%";

        no.style.width = "100px";
        no.style.height = "48px";
        no.style.fontSize = "1.6rem";

        stage = 4;
        teleportMode = true;

        setTimeout(function () {
            moveNoButton();
        }, 150);
    }
});

// MOBILE TELEPORT TOUCH HANDLER
no.addEventListener("touchstart", function (event) {
    if (teleportMode) {
        event.preventDefault();
        moveNoButton();
    }
}, { passive: false });

// PC TELEPORT MOUSE HANDLER
no.addEventListener("mouseenter", function () {
    if (teleportMode) {
        moveNoButton();
    }
});

// TELEPORT POSITION LOGIC
function moveNoButton() {
    if (!teleportMode) return;

    const buttonWidth = 100;
    const buttonHeight = 48;
    const padding = 20;
    const gap = 30;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const yesRect = yes.getBoundingClientRect();

    no.style.position = "fixed";
    no.style.width = buttonWidth + "px";
    no.style.height = buttonHeight + "px";
    no.style.fontSize = "1.6rem";
    no.style.borderRadius = "20px";
    no.style.zIndex = "999999";

    let x = padding;
    let y = padding;
    let found = false;

    for (let i = 0; i < 200; i++) {
        const testX = Math.random() * (screenWidth - buttonWidth - padding * 2) + padding;
        const testY = Math.random() * (screenHeight - buttonHeight - padding * 2) + padding;

        const noLeft = testX;
        const noRight = testX + buttonWidth;
        const noTop = testY;
        const noBottom = testY + buttonHeight;

        const safeLeft = yesRect.left - gap;
        const safeRight = yesRect.right + gap;
        const safeTop = yesRect.top - gap;
        const safeBottom = yesRect.bottom + gap;

        const collision =
            noRight > safeLeft &&
            noLeft < safeRight &&
            noBottom > safeTop &&
            noTop < safeBottom;

        if (!collision) {
            x = testX;
            y = testY;
            found = true;
            break;
        }
    }

    if (!found) {
        x = padding;
        y = padding;
    }

    no.style.left = x + "px";
    no.style.top = y + "px";
    no.style.transform = "rotate(" + (Math.random() * 14 - 7) + "deg)";
}

// YES BUTTON
yes.addEventListener("click", function () {
    teleportMode = false;
    no.style.display = "none";

    gif.src = "idc.gif";
    text.innerHTML =
        "YAYYY 😭❤️<br>" +
        "I knew you wouldn't stay angry forever 🥹🫶🏻<br>" +
        "Thank you for forgiving me ❤️";

    yes.innerHTML =
        '<a href="https://www.instagram.com/anish_kumar16_2009/" target="_blank">' +
        'Message me ❤️' +
        '</a>';

    yes.style.width = "92%";
    yes.style.height = "85%";

    video.style.position = "fixed";
    video.style.top = "0";
    video.style.left = "0";
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    video.style.display = "block";
    video.currentTime = 0;

    video.play().catch(function () {});
});

// RESIZE HANDLER
window.addEventListener("resize", function () {
    if (teleportMode) {
        moveNoButton();
    }
});
