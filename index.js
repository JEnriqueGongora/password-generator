const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
const maxLength = 18;

const generateButtonEl = document.getElementById("generateButton");
const passwordOutput1El = document.getElementById("passwordOutput1");
const passwordOutput2El = document.getElementById("passwordOutput2");
const inputLengthEl = document.getElementById("inputLength");
const minusBtnEl = document.getElementById("minusBtn");
const plusBtnEl = document.getElementById("plusBtn");
const lettersToggleEl = document.getElementById("letters-toggle");
const numbersToggleEl = document.getElementById("numbers-toggle");
const symbolsToggleEl = document.getElementById("symbols-toggle");
const copiedMessageEl = document.getElementById("copiedMessage");
const emptyOptionsMsgEl = document.getElementById("emptyOptionsMsg");

generateButtonEl.addEventListener("click", function () {
  generateBothPasswords(inputLengthEl.value);
});

lettersToggleEl.addEventListener("change", function () {
  toggleStateVerifier(lettersToggleEl);
});

numbersToggleEl.addEventListener("change", function () {
  toggleStateVerifier(numbersToggleEl);
});

symbolsToggleEl.addEventListener("change", function () {
  toggleStateVerifier(symbolsToggleEl);
});

minusBtnEl.addEventListener("click", function () {
  if (inputLengthEl.value > 1) {
    inputLengthEl.value = parseInt(inputLengthEl.value) - 1;
    inputLengthEl.textContent = inputLengthEl.value;
  } else if (inputLengthEl.value < 1) {
    inputLengthEl.value = 0;
  }
});

plusBtnEl.addEventListener("click", function () {
  if (inputLengthEl.value < maxLength) {
    inputLengthEl.value = parseInt(inputLengthEl.value) + 1;
    inputLengthEl.textContent = inputLengthEl.value;
  } else if (inputLengthEl.value > maxLength) {
    inputLengthEl.value = maxLength;
  }
});

passwordOutput1El.addEventListener("click", function () {
  copyToClipboard(passwordOutput1El);
});

passwordOutput2El.addEventListener("click", function () {
  copyToClipboard(passwordOutput2El);
});

function copyToClipboard(selectedPasswordOutput) {
  navigator.clipboard.writeText(selectedPasswordOutput.textContent).then(() => {
    copiedMessageEl.textContent = "✅ Copied to clipboard! :)";
    setTimeout(() => {
      copiedMessageEl.textContent = "";
    }, 2000);
  });
}

function toggleStateVerifier(characterType) {
  if (
    !lettersToggleEl.checked &&
    !numbersToggleEl.checked &&
    !symbolsToggleEl.checked
  ) {
    characterType.checked = true;
    emptyOptionsMsgEl.textContent =
      "‼️ At least one type of characters must be on.";
    setTimeout(() => {
      emptyOptionsMsgEl.textContent = "";
    }, 2000);
  }
}

function getCharactersPool() {
  let characters = [];

  //check the state of the checkboxes//
  if (lettersToggleEl.checked) {
    characters = characters.concat(letters);
  }
  if (numbersToggleEl.checked) {
    characters = characters.concat(numbers);
  }
  if (symbolsToggleEl.checked) {
    characters = characters.concat(symbols);
  }

  return characters;
}

function generatePassword(length, characters) {
  //dont't let the user go for more than set up max//
  if (length > 18) {
    length = 18;
    inputLengthEl.value = 18;
  } else if (length < 1) {
    length = 1;
    inputLengthEl.value = 1;
  }
  let password = "";

  for (let i = 0; i < length; i++) {
    const rando = Math.floor(Math.random() * characters.length);
    password += characters[rando];
  }

  console.log(characters);
  return password;
}

function generateBothPasswords(length) {
  let charactersPool = getCharactersPool();
  passwordOutput1El.textContent = generatePassword(length, charactersPool);
  passwordOutput2El.textContent = generatePassword(length, charactersPool);
}
