const yes = document.getElementById("yes");
const no = document.getElementById("no");
const gif = document.getElementById("gif");
const text = document.getElementById("text");
const video = document.getElementById("video");

let stage = 0;
let teleportMode = false;


// ========================================
// PRELOAD GIFS
// ========================================

const gifList = [
    "cat-heart.gif",
    "rusure.gif",
    "3shocked-1.gif",
    "4.crying.gif",
    "5.crying.gif",
    "idc.gif"
];

gifList.forEach(function (src) {
    const img = new Image();
    img.src = src;
});


// ========================================
// NO BUTTON
// ========================================

no.addEventListener("click", function (event) {

    event.preventDefault();

    // FINAL TELEPORT MODE
    if (teleportMode) {
        moveNoButton();
        return;
    }

    // FIRST NO
    if (stage === 0) {

        gif.src = "rusure.gif";

        text.innerHTML =
            "Achhaaa 😭❤️<br>" +
            "Sorry bol diya na... ab thoda sa smile bhi kar do 🥺";

        yes.style.width = "60%";
        yes.style.height = "65%";

        no.style.width = "28%";

        stage = 1;

        return;
    }


    // SECOND NO
    if (stage === 1) {

        gif.src = "3shocked-1.gif";

        text.innerHTML =
            "Okay, I get it 😭<br>" +
            "Galti meri thi, aur main maan raha hoon.<br>" +
            "Bas mujhse zyada der naraz mat raho 🥹";

        yes.style.width = "70%";
        yes.style.height = "70%";

        no.style.width = "22%";

        stage = 2;

        return;
    }


    // THIRD NO
    if (stage === 2) {

        gif.src = "4.crying.gif";

        text.innerHTML =
            "Mansi please 🥺❤️<br>" +
            "Tumse baat kiye bina din thoda ajeeb sa lagta hai...<br>" +
            "Ab gussa chhod do na 🫶🏻";

        yes.style.width = "80%";
        yes.style.height = "80%";

        no.style.width = "16%";

        stage = 3;

        return;
    }


    // FINAL NO
    if (stage === 3) {

        gif.src = "5.crying.gif";

        text.innerHTML =
            "Bas ab maan bhi jao na Mansi 🥺❤️<br>" +
            "Tumse baat na ho toh achha nahi lagta yaar... 🫶🏻";

        yes.style.width = "90%";
        yes.style.height = "90%";

        // Small teleport button
        no.style.width = "105px";
        no.style.height = "48px";
        no.style.fontSize = "25px";

        stage = 4;
        teleportMode = true;

        // Wait for YES to resize first
        setTimeout(function () {
            moveNoButton();
        }, 200);

    }

});


// ========================================
// MOBILE TOUCH
// ========================================

no.addEventListener("touchstart", function (event) {

    if (teleportMode) {

        event.preventDefault();

        moveNoButton();

    }

}, {
    passive: false
});


// ========================================
// TELEPORT FUNCTION
// ========================================

function moveNoButton() {

    if (!teleportMode) {
        return;
    }


    // --------------------------------
    // Button size
    // --------------------------------

    const buttonWidth = 105;
    const buttonHeight = 48;

    const padding = 15;

    const gap = 35;


    // --------------------------------
    // Screen size
    // --------------------------------

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;


    // --------------------------------
    // YES position
    // --------------------------------

    const yesRect = yes.getBoundingClientRect();


    // --------------------------------
    // Make NO fixed
    // --------------------------------

    no.style.position = "fixed";
    no.style.width = buttonWidth + "px";
    no.style.height = buttonHeight + "px";
    no.style.fontSize = "25px";
    no.style.zIndex = "999999";


    // --------------------------------
    // Find safe position
    // --------------------------------

    let x = padding;
    let y = padding;

    let found = false;


    for (let i = 0; i < 300; i++) {

        const maxX =
            Math.max(
                padding,
                screenWidth - buttonWidth - padding
            );

        const maxY =
            Math.max(
                padding,
                screenHeight - buttonHeight - padding
            );


        const testX =
            Math.random() * (maxX - padding) + padding;

        const testY =
            Math.random() * (maxY - padding) + padding;


        // NO rectangle
        const noLeft = testX;
        const noRight = testX + buttonWidth;

        const noTop = testY;
        const noBottom = testY + buttonHeight;


        // Safe area around YES
        const safeLeft = yesRect.left - gap;
        const safeRight = yesRect.right + gap;

        const safeTop = yesRect.top - gap;
        const safeBottom = yesRect.bottom + gap;


        // Check collision
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


    // --------------------------------
    // If no position found
    // --------------------------------

    if (!found) {

        // Put it at the top-left
        x = padding;
        y = padding;

    }


    // --------------------------------
    // Move button
    // --------------------------------

    no.style.left = x + "px";
    no.style.top = y + "px";

    no.style.transform =
        "rotate(" +
        (Math.random() * 14 - 7) +
        "deg)";
}


// ========================================
// YES BUTTON
// ========================================

yes.addEventListener("click", function () {

    teleportMode = false;

    no.style.display = "none";

    video.style.display = "block";

    gif.src = "idc.gif";

    text.innerHTML =
        "YAYYY 😭❤️<br>" +
        "I knew you wouldn't stay angry forever 🥹🫶🏻<br>" +
        "Thank you for forgiving me ❤️";

    yes.innerHTML =
        '<a href="https://www.instagram.com/anish_kumar16_2009/" target="_blank">' +
        'Message me ❤️' +
        '</a>';

    yes.style.width = "90%";
    yes.style.height = "90%";

});


// ========================================
// SCREEN RESIZE
// ========================================

window.addEventListener("resize", function () {

    if (teleportMode) {
        moveNoButton();
    }

});
