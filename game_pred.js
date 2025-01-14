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

function button_creator() {

}

function loss() {
    alert("You lost the game.")
}

function checker() {
    let input_user = document.getElementById("input").value.toLowerCase()
}