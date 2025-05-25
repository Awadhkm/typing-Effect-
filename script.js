const dynamicText = document.querySelector("h1 span");
const words = ["youtube", "blogger", "freelancer", "system Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const curentword = words[wordIndex];
    const currentChar = curentword.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex < curentword.length) {
        // if condition is true
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100)

    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blink");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;

        setTimeout(typeEffect, 1200);
    }
}
typeEffect();