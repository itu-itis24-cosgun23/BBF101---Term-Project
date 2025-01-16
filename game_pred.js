let score = 0
let mistake = 0
let word = "stock"
let guesses = []
let scoreElement = document.getElementById("score")
let heart1Element = document.getElementById("heart1")
let heart2Element = document.getElementById("heart2")
let heart3Element = document.getElementById("heart3")
let button_counter = 0


function changer(imageOld, imageNew) {
    imageOld.src = imageNew;
}

function reset() {

}

function won() {
    score = 100
    scoreElement.innerHTML = `Score: ${score}`
    alert("Congratulations! You won the game.")
}

function button_creator() {
    const reset_button = document.createElement('button');
    reset_button.textContent = 'Reset the Game';
    reset_button.onclick = reset;
    const container = document.getElementById('button-container');
    container.appendChild(reset_button);
}

function loss() {
    alert("You lost the game.")
}

function checker() {
    let input_user = document.getElementById("input").value.toLowerCase()
}