const messages = [
    "Estás segura??",
    "Realmente segura??",
    "De verdad?",
    "Pookie porfavor...",
    "Piénsalo por un segundo!",
    "Si dices que no me pondré muy triste...",
    "Muy muy triste...",
    "Pero que muy muy triste...",
    "Bueno vale, ya no te pregunto más...",
    "Estaba de broma, di que sí porfavor! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
