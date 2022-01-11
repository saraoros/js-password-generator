// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

window.alert("Welcome to our password generator! We're excited to help you create a safe password. Please answer the following prompts to help us create the perfect password for you.") 

 var getLength = window.prompt("How long would you like your password to be? Choose a number between 8-128 and type the desired length in the box below.");
var getUpperCase = window.prompt("Would you like your password to contain upper case letters? Type 'YES' or 'NO' in the box below.");

 var getLowerCase = window.prompt("Would you like your password to contain lower case letters? Type 'YES' or 'NO' in the box below.");

 var getSymbols = window.prompt("Would you like your password to contain special characters? Type 'YES' or 'NO' in the box below.");

 var getNumbers = window.prompt("Would you like your password to contain numbers? Type 'YES' or 'NO' in the box below.");


// Start of If statements & functions


/* if (getUpperCase === "NO" || getUpperCase === "no"); { */
   // Not sure if I should make a statement for the 'no' option
function getUpperCase() {
if (getUpperCase === "YES" || getUpperCase === "yes");
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
 
/* if (getLowerCase === "NO" || getLowerCase === "no"); { */
  // Not sure if I should make a statement for the 'no' option

function getLowerCase() {
if  (getLowerCase === "YES" || getLowerCase === "yes"); 
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
 

/* if (getSymbols === "NO" || getSymbols === "no"); { */
  // Not sure if I should make a statement for the 'no' option

function getSymbols() {
if (getSymbols === "YES" || getSymbols === "yes");
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}


/* if (getNumbers === "NO" || getNumbers === "no"); { */
  // Not sure if I should make a statement for the 'no' option

function getNumbers() {
if (getNumbers === "YES" || getNumbers === "yes");
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


// I know I need a for loop but I am not sure how to add it or what to put in it exactly.
function getLength() {

}



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
generateBtn.addEventListener("click", writePassword); {

}