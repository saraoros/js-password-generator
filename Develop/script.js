// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Start of window alerts and window prompts
window.alert(
  "Welcome to our Password Generator! We're excited to help you create a safe password. Please answer the following prompts to help us create the perfect password for you."
);

var getLength = parseInt(
  prompt(
    "How long would you like your password to be? Choose a number between 8-128 and type the desired length in the box below."
  )
);
while (!getLength) {
  getLength = parseInt(prompt("Please enter a valid number!"));
}

var getUpperCase = window.prompt(
  "Would you like your password to contain upper case letters? Type 'YES' or 'NO' in the box below."
);

var getLowerCase = window.prompt(
  "Would you like your password to contain lower case letters? Type 'YES' or 'NO' in the box below."
);

var getSymbols = window.prompt(
  "Would you like your password to contain special characters? Type 'YES' or 'NO' in the box below."
);

var getNumbers = window.prompt(
  "Would you like your password to contain numbers? Type 'YES' or 'NO' in the box below."
);
// End of window alerts and window prompts

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var lowerCase = "abcdefghijklmnopqrstuvwxyz";

var numberChar = "0123456789";

var symbols = "!@#$%^&*(){}[]=<>/,.";

var allChars = "";

var userInput = [];

console.log(allChars);

console.log(getLength, getUpperCase, getLowerCase, getSymbols, getNumbers);

if (getLength < 8 || getLength > 128 || !getLength || isNaN(getLength)) {
  alert("Invalid entry");
} else {
  console.log("Valid entry");
  getUpperCaseFn();
  getLowerCaseFn();
  getSymbolsFn();
  getNumbersFn();
  console.log(allChars);
}

var password = "";

for (var i = 0; i < getLength; i++) {
  var index = Math.floor(Math.random() * allChars.length);
  var char = allChars.charAt(index);
  password += char;

}
writePassword();
console.log(password);

// Start of functions
function getUpperCaseFn() {
  if (getUpperCase.toUpperCase() === "YES") {
    allChars += upperCase;
  }
}

function getLowerCaseFn() {
  if (getLowerCase === "YES" || getLowerCase === "yes") {
    allChars += lowerCase;
    //return symbols[Math.floor(Math.random() * lowerCase.length)];
  }
  //return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getSymbolsFn() {
  if (getSymbols === "YES" || getSymbols === "yes") {
    allChars += symbols;
    //return symbols[Math.floor(Math.random() * symbols.length)];
  }
}

function getNumbersFn() {
  if (getNumbers === "YES" || getNumbers === "yes") {
    allChars += numberChar;
    //return +numberChar[(Math.floor(Math.random() * 10) + 48)];
  }
}

function getLengthFn() {}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
{
}
