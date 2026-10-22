
"use strict";

// 1. Click event
const clickMe = document.getElementById("clickMe");

clickMe.addEventListener("click", function () {
    clickMe.textContent = "You clicked me!";
    clickMe.style.backgroundColor = "#90ee90";
});

// 2. Double-click event
const doubleClickMe = document.getElementById("doubleClickMe");

doubleClickMe.addEventListener("dblclick", function () {
    doubleClickMe.textContent = "You double-clicked me!";
    doubleClickMe.style.color = "blue";
    doubleClickMe.style.fontSize = "24px";
});

// 3. Hover event
const hoverMe = document.getElementById("hoverMe");

hoverMe.addEventListener("mouseover", function () {
    hoverMe.textContent = "Your mouse is over me!";
    hoverMe.style.backgroundColor = "#ffb6c1";
    hoverMe.style.color = "#7a003c";
});

hoverMe.addEventListener("mouseout", function () {
    hoverMe.textContent = "Hover your mouse over this text!";
    hoverMe.style.backgroundColor = "";
    hoverMe.style.color = "";
});

// 4. Spacebar event
const spaceMessage = document.getElementById("spaceMessage");

document.body.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        event.preventDefault();

        spaceMessage.textContent = "You pressed the spacebar!";
        spaceMessage.style.backgroundColor = "#90ee90";
    }
});

// Bonus 1: Change the background after 15 seconds
setTimeout(function () {
    document.body.style.backgroundColor = "#c9b6ff";

    document.getElementById("timerMessage").textContent =
        "Surprise! The background changed after 15 seconds!";
}, 15000);

// Bonus 2: Move the box to a random position every 3 seconds
const movingBox = document.getElementById("movingBox");

setInterval(function () {
    const randomX = Math.floor(Math.random() * 301) - 150;
    const randomY = Math.floor(Math.random() * 101) - 50;

    movingBox.style.transform =
        `translate(${randomX}px, ${randomY}px)`;
}, 3000);

// Hard bonus: Detect S, E, C, R, E, T in any order
const requiredKeys = {
    s: 1,
    e: 2,
    c: 1,
    r: 1,
    t: 1
};

const pressedKeys = {
    s: 0,
    e: 0,
    c: 0,
    r: 0,
    t: 0
};

let secretFound = false;

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key in requiredKeys && !secretFound) {
        pressedKeys[key]++;

        // Check whether every required letter was pressed enough times
        const foundAllKeys = Object.keys(requiredKeys).every(function (letter) {
            return pressedKeys[letter] >= requiredKeys[letter];
        });

        if (foundAllKeys) {
            secretFound = true;

            const secretParagraph = document.createElement("p");
            secretParagraph.textContent = "You found the secret";
            secretParagraph.style.backgroundColor = "#90ee90";
            secretParagraph.style.padding = "20px";
            secretParagraph.style.fontWeight = "bold";

            document.querySelector("main").appendChild(secretParagraph);
        }
    }
});
