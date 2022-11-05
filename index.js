const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
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

let permittedCharacters = characters.length;

let firstPasswordEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");
let passwordLengthEl = document.getElementById("password-length");
let passwordLength = 15;

let toggleEl = document.getElementById("toggle");

function generatePasswordText() {
  let passwordText = "";
  for (let i = 0; i < passwordLength; i++) {
    passwordText += characters[Math.floor(Math.random() * permittedCharacters)];
  }
  return passwordText;
}

function setPasswordText() {
  firstPasswordEl.textContent = generatePasswordText();
  secondPasswordEl.textContent = generatePasswordText();
}

function copyText(button) {
  let copyEl = document.getElementById(button);
  navigator.clipboard.writeText(copyEl.textContent);
  alert("Copied to clipboard: " + copyEl.textContent);
  console.log("Copied text: " + copyEl.textContent);
}

function setLength() {
  passwordLength = passwordLengthEl.value;
  if (passwordLength.length === 0) {
    passwordLength = 15;
  }
}

function findToggleValue() {
  if (toggleEl.checked) {
    permittedCharacters = 51;
  } else {
    permittedCharacters = characters.length;
  }
}
