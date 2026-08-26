const yes = document.getElementById("yes");
const no = document.getElementById("no");
const gif = document.getElementById("gif");
const text = document.getElementById("text");
const video = document.getElementById("video");

let count = 0;
let escapeMode = false;


// =====================================
// PRELOAD GIFS
// =====================================

const gifList = [
    "cat-heart.gif",
    "rusure.gif",
    "3shocked-1.gif",
    "4.crying.gif",
    "5.crying.gif",
    "idc.gif"
];

gifList.forEach(function (src) {
    const image = new Image();
    image.src = src;
});


// =====================================
// NO BUTTON
// =====================================

no.addEventListener("pointerdown", function (e) {

    e.preventDefault();

    // =================================
    // FINAL MODE
    // =================================

    if (escapeMode) {
        moveNo();
        return;
    }


    // =================================
    // NO #1
    // =================================

    if (count === 0) {

        gif.src = "rusure.gif";

        text.innerHTML =
            "Achhaaa 😭❤️<br>" +
            "Sorry bol diya na... ab thoda sa smile bhi kar do 🥺";

        yes.style.width = "60%";
        yes.style.height = "65%";

        no.style.width = "28%";

        count = 1;

        return;
    }


    // =================================
    // NO #2
    // =================================

    if (count === 1) {

        gif.src = "3shocked-1.gif";

        text.innerHTML =
            "Okay, I get it 😭<br>" +
            "Galti meri thi, aur main maan raha hoon.<br>" +
            "Bas mujhse zyada der naraz mat raho 🥹";

        yes.style.width = "70%";
        yes.style.height = "70%";

        no.style.width = "22%";

        count = 2;

        return;
    }


    // =================================
    // NO #3
    // =================================

    if (count === 2) {


        gif.src = "4.crying.gif";

        text.innerHTML =
            "Mansi please 🥺❤️<br>" +
            "Tumse baat kiye bina din thoda ajeeb sa lagta hai...<br>" +
            "Ab gussa chhod do na 🫶🏻";

        yes.style.width = "80%";
        yes.style.height = "80%";

        no.style.width = "16%";

        count = 3;

        return;
    }


    // =================================
    // NO #4 — FINAL MESSAGE
    // =================================

    if (count === 3) {

        gif.src = "5.crying.gif";

        text.innerHTML =
            "Bas ab maan bhi jao na Mansi 🥺❤️<br>" +
            "Tumse baat na ho toh achha nahi lagta yaar... 🫶🏻";

        yes.style.width = "90%";
        yes.style.height = "90%";

        // SMALL NO BUTTON
        no.style.width = "85px";
        no.style.height = "42px";
        no.style.fontSize = "22px";

        // Enable teleport
        escapeMode = true;

        count = 4;

        // Move immediately
        setTimeout(function () {
            moveNo();
        }, 100);

        return;
    }

});


// =====================================
// TELEPORT FUNCTION
// =====================================

function moveNo() {

    if (!escapeMode) {
        return;
    }

    // Fixed to the whole screen
    no.style.position = "fixed";

    no.style.width = "85px";
    no.style.height = "42px";
    no.style.fontSize = "22px";

    no.style.zIndex = "999999";

    // Remove transform from previous position
    no.style.transform = "none";

    const padding = 10;

    const buttonWidth = 85;
    const buttonHeight = 42;

    // Safe screen boundaries
    const maxX =
        window.innerWidth - buttonWidth - padding;

    const maxY =
        window.innerHeight - buttonHeight - padding;

    // Random position
    const randomX =
        Math.floor(
            Math.random() * Math.max(1, maxX - padding)
        ) + padding;

    const randomY =
        Math.floor(
            Math.random() * Math.max(1, maxY - padding)
        ) + padding;

    no.style.left = randomX + "px";
    no.style.top = randomY + "px";

}


// =====================================
// YES BUTTON
// =====================================

yes.addEventListener("click", function () {

    // Stop NO teleporting
    escapeMode = false;

    // Hide NO
    no.style.display = "none";

    // Show video
    video.style.display = "block";

    // Final GIF
    gif.src = "idc.gif";

    // Final message
    text.innerHTML =
        "YAYYY 😭❤️<br>" +
        "I knew you wouldn't stay angry forever 🥹🫶🏻<br>" +
        "Thank you for forgiving me ❤️";

    // Final button
    yes.innerHTML =
        '<a href="https://www.instagram.com/anish_kumar16_2009/" target="_blank">' +
        'Message me ❤️' +
        '</a>';

    yes.style.width = "90%";
    yes.style.height = "90%";

});


// =====================================
// SCREEN RESIZE
// =====================================

window.addEventListener("resize", function () {

    if (escapeMode) {
        moveNo();
    }

});
