// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Start of window alerts and window prompts
window.alert(
  "Welcome to our password generator! We're excited to help you create a safe password. Please answer the following prompts to help us create the perfect password for you."
);

var getLength = window.prompt(
  "How long would you like your password to be? Choose a number between 8-128 and type the desired length in the box below."
);

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



for (var i = 0; i < getLength; i++) {
  //return String.fromCharCode(Math.floor(Math.random() * 26) + 65); 'illegal return statement'
  //return Math.floor.random() * allChars; 'illegal return statement'
  //return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 'illegal return statement'
  //Math.floor(Math.random() * 128 + 1);
  //Math.floor(Math.random() * 'allChars');
  //Math.floor(Math.random() * 'getLength');
  //return Math.floor(Math.random() * (128 - 8) + 8);  'illegal return statement'
  //(getLength, getUpperCase, getLowerCase, getSymbols, getNumbers);

  //math floor math random, mutiply to all Chars
  //If math random cannot be applied to a string, then turn that string to array by using a split method
}


// Start of functions
function getUpperCaseFn() {
  if (getUpperCase.toUpperCase() === "YES" /* || getUpperCase() === "yes" */) {
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

//bottom of JS?

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
generateBtn.addEventListener("click", writePassword);{
}

// End of bottom JS??
