let score = 0
let mistake = 0
let word = "stock"
let guesses = []
let scoreElement = document.getElementById("score")
let heart1Element = document.getElementById("heart1")
let heart2Element = document.getElementById("heart2")
let heart3Element = document.getElementById("heart3")
let image1 = document.getElementById('image1')
let image2 = document.getElementById('image2')
let image3 = document.getElementById('image3')
let image4 = document.getElementById('image4')
let image5 = document.getElementById('image5')
let button_counter = 0


function changer(imageOld, imageNew) {
    imageOld.src = imageNew;
}

function reset() {
    reset_button.remove()
    changer(image1, 'blank.svg')
    changer(image2, 'blank.svg')
    changer(image3, 'blank.svg')
    changer(image4, 'blank.svg')
    changer(image5, 'blank.svg')
    score = 0
    mistake = 0
    guesses = []
    button_counter = 0
    scoreElement.innerHTML = `Score: ${score}`
    heart3Element.hidden = false
    heart2Element.hidden = false
    heart1Element.hidden = false
    document.getElementById("input").value = "";
}

function won() {
    score = 100
    scoreElement.innerHTML = `Score: ${score}`
    changer(image1, 's.svg')
    changer(image2, 't.svg')
    changer(image3, 'o.svg')
    changer(image4, 'c.svg')
    changer(image5, 'k.svg')
    alert("Congratulations! You won the game.")
}

function button_creator() {
    reset_button = document.createElement('button')
    reset_button.textContent = 'Reset the Game'
    reset_button.onclick = reset
    const container = document.getElementById('button-container')
    container.appendChild(reset_button)
}


function loss() {
    alert("You lost the game.")
}

function checker() {
    let input_user = document.getElementById("input").value.toLowerCase()
    if (button_counter == 0) {
        if (input_user.length == 0) {
            alert("Please enter an input.")
            button_creator()
            button_counter = button_counter + 1
        } else if (input_user.length == 1) {
            if (input_user == "s") {
                changer(image1, 's.svg')
                score = score + 20
                scoreElement.innerHTML = `Score: ${score}`
                button_creator()
                button_counter = button_counter + 1
                guesses.push(input_user)
            } else if (input_user == "t") {
                changer(image2, 't.svg')
                score = score + 20
                scoreElement.innerHTML = `Score: ${score}`
                button_creator()
                button_counter = button_counter + 1
                guesses.push(input_user)
            } else if (input_user == "o") {
                changer(image3, 'o.svg')
                score = score + 20
                scoreElement.innerHTML = `Score: ${score}`
                button_creator()
                button_counter = button_counter + 1
                guesses.push(input_user)
            } else if (input_user == "c") {
                changer(image4, 'c.svg')
                score = score + 20
                scoreElement.innerHTML = `Score: ${score}`
                button_creator()
                button_counter = button_counter + 1
                guesses.push(input_user)
            } else if (input_user == "k") {
                changer(image5, 'k.svg')
                score = score + 20
                scoreElement.innerHTML = `Score: ${score}`
                button_creator()
                button_counter = button_counter + 1
                guesses.push(input_user)
            } else {
                heart3Element.remove()
                mistake = mistake + 1
                button_creator()
                button_counter = button_counter + 1
                if (mistake == 1) {
                    heart3Element.hidden = true
                } else if (mistake == 2) {
                    heart2Element.hidden = true
                } else {
                    heart1Element.hidden = true
                    loss()
                }
            }
        } else {
            if (input_user == word) {
                won()
                button_creator()
                button_counter = button_counter + 1
            } else {
                loss()
                button_creator()
                button_counter = button_counter + 1
            }
        }    
    } else {
        if (input_user.length == 0) {
            alert("Please enter an input.")
        } else if (input_user.length == 1) {
            if (input_user == "s") {
                if (!(guesses.includes(input_user))) {
                    changer(image1, 's.svg')
                    score = score + 20
                    guesses.push(input_user)
                    if (score == 100) {
                        won()
                    } 
                } 
                scoreElement.innerHTML = `Score: ${score}`
            } else if (input_user == "t") {
                if (!(guesses.includes(input_user))) {
                    changer(image2, 't.svg')
                    score = score + 20
                    guesses.push(input_user)
                    if (score == 100) {
                        won()
                    } 
                }
                scoreElement.innerHTML = `Score: ${score}`
            } else if (input_user == "o") {
                if (!(guesses.includes(input_user))) {
                    changer(image3, 'o.svg')
                    score = score + 20
                    guesses.push(input_user)
                    if (score == 100) {
                        won()
                    } 
                }
                scoreElement.innerHTML = `Score: ${score}`
            } else if (input_user == "c") {
                if (!(guesses.includes(input_user))) {
                    changer(image4, 'c.svg')
                    score = score + 20
                    guesses.push(input_user)
                    if (score == 100) {
                        won()
                    } 
                }
                scoreElement.innerHTML = `Score: ${score}`
            } else if (input_user == "k") {
                if (!(guesses.includes(input_user))) {
                    changer(image5, 'k.svg')
                    score = score + 20
                    guesses.push(input_user)
                    if (score == 100) {
                        won()
                    } 
                }
                scoreElement.innerHTML = `Score: ${score}`
            } else {
                mistake = mistake + 1
                if (mistake == 1) {
                    heart3Element.hidden = true
                } else if (mistake == 2) {
                    heart2Element.hidden = true
                } else {
                    heart1Element.hidden = true
                    loss()
                }
            }
        } else {
            if (input_user == word) {
                won()
            } else {
                loss()
            }
        }    
    }
}
