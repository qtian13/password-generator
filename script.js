// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password with specified criteria
function generatePassword() {
// specify the length of password
  var passwordLength = speicfyTheLength();
// specify the possible characters can be used
  var charactersSatisfied = generateCharactersSatisfied();
// generate the password of certain length with charactersSatisfied and return it
  return "123253";
}

// specify the length of password
function speicfyTheLength() {
  return 5;
}

// specify the possible characters can be used
function generateCharactersSatisfied() {
  return "abcdefg";
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
