let keys = ["a", "s", "d", "f", "g", "h", "j", "w", "e", "t", "y", "u"];

document.addEventListener("keydown", (e) => {
    keys.includes(e.key)
        ? new Audio(`audio\\${e.key}.mp3`).play()
        : console.warn(`The \'${e.key}\' key is pressed`);
});