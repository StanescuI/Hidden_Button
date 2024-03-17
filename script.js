const buttons = document.querySelectorAll('.button');
const randomIndex = Math.floor(Math.random() * buttons.length);
const winningButton = buttons[randomIndex];
function revealResult(currentButton) {
    if (currentButton === winningButton) {
        alert("Winner");
    } else {
        alert("Loser");
    }
}
