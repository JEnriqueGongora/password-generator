const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateButtonEl = document.getElementById("generateButton")
const passwordOutput1El = document.getElementById("passwordOutput1")
const passwordOutput2El = document.getElementById("passwordOutput2")
const inputLengthEl = document.getElementById("inputLength")
const minusBtnEl = document.getElementById("minusBtn")
const plusBtnEl = document.getElementById("plusBtn")

generateButtonEl.addEventListener("click", function() {
    generateBothPasswords(inputLengthEl.value) 
})

minusBtnEl.addEventListener("click", function() {
    if (inputLengthEl.value > 1) {
        inputLengthEl.value = parseInt(inputLengthEl.value) - 1
        inputLengthEl.textContent = inputLengthEl.value
    } else if (inputLengthEl.value < 1) {
        inputLengthEl.value = 0
        inputLengthEl.textContent = inputLengthEl.value
    }
})

plusBtnEl.addEventListener("click", function() {
    if (inputLengthEl.value < 18) {
        inputLengthEl.value = parseInt(inputLengthEl.value) + 1
        inputLengthEl.textContent = inputLengthEl.value
    } else if (inputLengthEl.value > 18) {
        inputLengthEl.value = 18
        inputLengthEl.textContent = inputLengthEl.value
    }
})

function generateBothPasswords(length) {
    passwordOutput1El.textContent = generatePassword(length)
    passwordOutput2El.textContent = generatePassword(length)
}

function  generatePassword(length) {
    if (length > 18) {
        length = 18
        inputLengthEl.value = 18
        inputLengthEl.textContent = 18
    }
    
    else if (length < 1) {
        length = 1
        inputLengthEl.value = 1
        inputLengthEl.textContent = 1
    }
    let password = ""
    for (let i = 0; i < length; i++) {
    const rando = Math.floor(Math.random() * characters.length)
        password += characters[rando]
    }
    return password
}