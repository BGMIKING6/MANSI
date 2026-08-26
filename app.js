const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");

let count = 2;


// All GIFs
const gifs = [
    "cat-heart.gif",
    "rusure.gif",
    "3shocked-1.gif",
    "4.crying.gif",
    "5.crying.gif",
    "idc.gif"
];


// Preload GIFs
gifs.forEach(gifSrc => {
    const img = new Image();
    img.src = gifSrc;
});


// =========================
// NO BUTTON
// =========================

no.addEventListener("click", () => {

    // First NO
    if (count === 2) {

        gif.src = "rusure.gif";

        text.innerHTML =
            "You meant to press YES right? 🤨";

        yes.style.height = "65%";
        yes.style.width = "60%";

        no.style.width = "30%";

        count++;
    }


    // Second NO
    else if (count === 3) {

        gif.src = "3shocked-1.gif";

        text.innerHTML =
            "Your hand must have slipped right? 🥹";

        yes.style.height = "70%";
        yes.style.width = "70%";

        no.style.width = "20%";

        count++;
    }


    // Third NO
    else if (count === 4) {

        gif.src = "4.crying.gif";

        text.innerHTML =
            "I'm gonna cry 😭";

        yes.style.height = "80%";
        yes.style.width = "80%";

        no.style.fontSize = "4vh";
        no.style.width = "10%";

        count++;
    }


    // Fourth NO
    else if (count === 5) {

        gif.src = "5.crying.gif";

        text.innerHTML =
            "Pretty Please 🥺😘";

        yes.style.height = "90%";
        yes.style.width = "96%";

        /*
            IMPORTANT:

            NO does NOT disappear.

            If Mansi presses NO again,
            absolutely nothing happens.
        */

        count++;
    }


    // Fifth NO and onwards
    else {

        // Do absolutely nothing 😂

    }

});


// =========================
// YES BUTTON
// =========================

yes.addEventListener("click", () => {

    // Show heart video
    vid.style.display = "block";

    // Final GIF
    gif.src = "idc.gif";

    // Final message
    text.innerHTML =
        "Knew it babe 😘❤️";

    // Change button
    yes.innerHTML =
        '<a href="https://www.instagram.com/anish_kumar16_2009/" target="_blank">Message me ❤️</a>';

    // Make YES big
    yes.style.height = "90%";
    yes.style.width = "96%";

    // NO stays hidden after YES
    no.style.display = "none";


    // Hide video after 9 seconds
    setTimeout(() => {
        vid.style.display = "none";
    }, 9000);

});
